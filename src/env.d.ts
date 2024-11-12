/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly AIRTABLE_API_SECRET: string
  readonly AIRTABLE_BASE_ID: string
  readonly AIRTABLE_TABLE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
