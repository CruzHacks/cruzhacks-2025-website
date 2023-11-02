/// <reference types="vite/client" />

interface ImportMetaEnv {
  VITE_EXAMPLE_ENV_VAR: string

  // Firebase Functions Endpoint URL for hitting CruzHacks-2024-Backend
  VITE_FIREBASE_ENDPOINT_URL: string

  // Firebase Config (https://firebase.google.com/docs/web/setup#config-object)
  VITE_FIREBASE_API_KEY: string
  VITE_FIREBASE_AUTH_DOMAIN: string
  VITE_FIREBASE_DATABASE_URL: string
  VITE_FIREBASE_PROJECT_ID: string
  VITE_FIREBASE_STORAGE_BUCKET: string
  VITE_FIREBASE_MESSAGING_SENDER_ID: string
  VITE_FIREBASE_APP_ID: string
  VITE_FIREBASE_MEASUREMENT_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
