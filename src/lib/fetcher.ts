// SWR fetcher for client-side data fetching
export const fetcher = async (url: string, options?: RequestInit) => {
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  })

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    const errorData = await res.json().catch(() => ({}))
    throw Object.assign(error, {
      status: res.status,
      statusText: res.statusText,
      data: errorData,
    })
  }

  return res.json()
}

// API client with retry logic
export class ApiClient {
  private baseUrl: string
  private defaultOptions: RequestInit

  constructor(baseUrl = '/api') {
    this.baseUrl = baseUrl
    this.defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {},
    retries = 3
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    const config = { ...this.defaultOptions, ...options }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        if (response.status === 401) {
          // Handle unauthorized - could redirect to login
          window.location.href = '/auth/login'
          throw new Error('Unauthorized')
        }

        if (response.status >= 500 && retries > 0) {
          // Retry on server errors
          await new Promise(resolve => setTimeout(resolve, 1000 * (4 - retries)))
          return this.request(endpoint, options, retries - 1)
        }

        const error = await response.json()
        throw new Error(error.message || 'Request failed')
      }

      // Handle empty responses
      const text = await response.text()
      return text ? JSON.parse(text) : ({} as T)
    } catch (error) {
      console.error(`API request failed: ${url}`, error)
      throw error
    }
  }

  async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'GET' })
  }

  async post<T>(endpoint: string, data?: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async put<T>(endpoint: string, data?: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async patch<T>(endpoint: string, data?: any, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    })
  }

  async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    return this.request<T>(endpoint, { ...options, method: 'DELETE' })
  }
}

// Create a singleton instance
export const api = new ApiClient()

// TMDB-specific fetcher
export const tmdbFetcher = async (path: string, params?: Record<string, string>) => {
  const baseUrl = 'https://api.themoviedb.org/3'
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY

  if (!apiKey) {
    throw new Error('TMDB API key is not configured')
  }

  const searchParams = new URLSearchParams({
    api_key: apiKey,
    language: 'en-US',
    ...params,
  })

  const url = `${baseUrl}${path}?${searchParams.toString()}`

  const response = await fetch(url, {
    next: {
      revalidate: 3600, // Cache for 1 hour by default
    },
  })

  if (!response.ok) {
    throw new Error(`TMDB API request failed: ${response.statusText}`)
  }

  return response.json()
}

// Helper for making authenticated requests
export const authenticatedFetcher = async (
  url: string,
  options?: RequestInit
) => {
  // In a real app, you would get the token from your auth provider
  // const session = await getSession()
  // const token = session?.accessToken

  const headers = {
    ...options?.headers,
    // ...(token && { Authorization: `Bearer ${token}` }),
  }

  return fetcher(url, { ...options, headers })
}