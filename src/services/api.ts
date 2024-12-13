import { config } from '@/config'

export const generateInsult = async (language: string = config.app.defaultLanguage): Promise<string> => {
  try {
    const response = await fetch(
      `/api/insult?lang=${language}`,
      {
        method: 'GET',
        headers: {
          'Accept': 'text/plain',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const text = await response.text()
    return text

  } catch (error) {
    console.error('Fetch Error:', error)
    throw new Error('Failed to generate insult, please try again')
  }
} 