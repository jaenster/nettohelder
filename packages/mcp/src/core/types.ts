export interface CaoMetaEntry {
  /** true when the record came from the cao-pipeline and has not been hand-reviewed. */
  draft: boolean;
  /** Extraction confidence the pipeline reported; absent for hand-written records. */
  confidence?: 'high' | 'medium' | 'low';
}
