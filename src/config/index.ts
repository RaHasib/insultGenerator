export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || 'https://evilinsult.com',
    endpoint: '/generate_insult.php'
  },
  app: {
    maxHistory: Number(import.meta.env.VITE_MAX_HISTORY) || 5,
    defaultLanguage: import.meta.env.VITE_DEFAULT_LANGUAGE || 'en'
  }
} as const 