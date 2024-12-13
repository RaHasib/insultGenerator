import { config } from '@/config'

export const generateInsult = async (language: string = config.app.defaultLanguage): Promise<string> => {
  try {
    const timestamp = Date.now()
    const apiUrl = `${config.api.baseUrl}${config.api.endpoint}?lang=${language}&t=${timestamp}`
    const proxyUrl = `${config.api.corsProxy}${encodeURIComponent(apiUrl)}`

    const response = await fetch(proxyUrl, {
      method: 'GET',
      headers: {
        'Accept': 'text/plain'
      }
    })

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