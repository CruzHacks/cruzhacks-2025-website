/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_EXAMPLE_ENV_VAR: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
