export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    endpoint: '/generate_insult.php',
    corsProxy: import.meta.env.VITE_CORS_PROXY
  },
  app: {
    maxHistory: Number(import.meta.env.VITE_MAX_HISTORY),
    defaultLanguage: import.meta.env.VITE_DEFAULT_LANGUAGE
  }
} as const 