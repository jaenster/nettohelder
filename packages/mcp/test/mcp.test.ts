import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { InMemoryTransport } from '@modelcontextprotocol/sdk/inMemory.js';
import type { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { decode } from '@toon-format/toon';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { createServer } from '../src/server.js';

let client: Client;

beforeAll(async () => {
  const [clientTransport, serverTransport] = InMemoryTransport.createLinkedPair();
  await createServer({ today: () => '2026-06-01' }).connect(serverTransport);
  client = new Client({ name: 'test', version: '0.0.0' });
  await client.connect(clientTransport);
});
afterAll(() => client.close());

async function call(name: string, args: Record<string, unknown>): Promise<{ text: string; data: Record<string, unknown>; isError: boolean }> {
  const res = (await client.callTool({ name, arguments: args })) as CallToolResult;
  const first = res.content[0];
  const text = first?.type === 'text' ? first.text : '';
  let data: Record<string, unknown> = {};
  try {
    data = decode(text) as Record<string, unknown>;
  } catch {
    // SDK-level validation errors are plain text, not TOON.
  }
  return { text, data, isError: res.isError === true };
}

describe('nettohelder MCP server', () => {
  it('lists the four tools and explains TOON in its instructions', async () => {
    const tools = (await client.listTools()).tools.map((t) => t.name).sort();
    expect(tools).toEqual(['bereken_netto', 'cao_details', 'vergelijk_jaren', 'zoek_cao']);
    expect(client.getInstructions()).toMatch(/TOON \(Token-Oriented Object Notation\)/);
  });

  it('bereken_netto returns a TOON breakdown with provenance', async () => {
    const { text, data, isError } = await call('bereken_netto', { brutoPerMaand: 3000 });
    expect(isError).toBe(false);
    expect(text).toMatch(/^steps\[\d+\]\{key,label,amount,status\}:/m);
    const result = data.result as Record<string, number>;
    expect(result.nettoJaar).toBeGreaterThan(30_000);
    expect((data.provenance as { status: string }).status).toBe('confirmed');
  });

  it('bereken_netto resolves a CAO position', async () => {
    const { data, isError } = await call('bereken_netto', { cao: { id: 'gemeenten', schaal: '8', trede: 3 } });
    expect(isError).toBe(false);
    expect((data.cao as { id: string }).id).toBe('gemeenten');
  });

  it('bereken_netto reports unresolvable input as a tool error', async () => {
    const missing = await call('bereken_netto', { cao: { id: 'gemeenten' } });
    expect(missing.isError).toBe(true);
    expect(missing.data.error).toBe('invalid_request');
    expect(String(missing.data.message)).toMatch(/schaal/);
    const both = await call('bereken_netto', { brutoPerMaand: 1, brutoPerJaar: 2 });
    expect(both.isError).toBe(true);
  });

  it('zoek_cao finds by name and sector as a TOON table', async () => {
    const { text, data } = await call('zoek_cao', { q: 'kappers' });
    expect(text).toMatch(/^items\[1\]\{id,name,sector,salaryKind,periods,status,draft\}:/m);
    expect((data.items as { id: string }[])[0]?.id).toBe('kappers');
    const zorg = await call('zoek_cao', { sector: 'zorg', limit: 3 });
    expect((zorg.data.items as unknown[]).length).toBe(3);
  });

  it('cao_details returns terms and optionally the tables', async () => {
    const full = await call('cao_details', { id: 'kappers' });
    expect(full.isError).toBe(false);
    expect(full.text).toMatch(/schalen:/);
    const terms = await call('cao_details', { id: 'kappers', tables: false });
    expect(terms.text).not.toMatch(/schalen:/);
    expect(terms.data.vakantiegeldPct).toBe(0.08);
    const missing = await call('cao_details', { id: 'nope' });
    expect(missing.isError).toBe(true);
  });

  it('vergelijk_jaren compares 2026 with 2027', async () => {
    const { data, isError } = await call('vergelijk_jaren', { brutoPerJaar: 100_000, dertigProcentRegeling: true });
    expect(isError).toBe(false);
    const jaren = data.jaren as { year: number; nettoJaar: number; status: string }[];
    expect(jaren.map((j) => j.year)).toEqual([2026, 2027]);
    expect(jaren[1]?.status).toBe('provisional');
    const verschil = data.verschil as { nettoJaar: number };
    expect(verschil.nettoJaar).toBeCloseTo(jaren[1]!.nettoJaar - jaren[0]!.nettoJaar, 1);
    // 27% instead of 30% tax-free makes 2027 less favourable for this expat.
    expect(verschil.nettoJaar).toBeLessThan(0);
  });
});
