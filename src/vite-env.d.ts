/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string
    readonly VITE_MAX_HISTORY: string
    readonly VITE_DEFAULT_LANGUAGE: string
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  } 
