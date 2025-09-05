import { Anime } from '@/types/Anime'
import { AnimeQueryParameters } from '@/types/AnimeQueryParameters'
import { ApiResponse, ErrorResponse } from '@/types/ApiResponse'

export async function fetchTopAnime({ page = 1, limit = 5, filter }: AnimeQueryParameters) {
  const queries = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString()
  })

  if (filter) queries.append('filter', filter)

  try {
    const response = await fetch(`${process.env.API_URL}/top/anime?${queries.toString()}`, {
      cache: 'force-cache',
      next: { revalidate: 86400 }
    })

    const data: ApiResponse<Anime> | ErrorResponse = await response.json()

    if ('error' in data) {
      throw new Error('Response error: ' + data.message)
    }

    return data
  } catch (error) {
    throw new Error('Network error: ' + (error as Error).message)
  }
}

export async function fetchSeasonNow({ page = 1, limit, sfw, filter }: AnimeQueryParameters) {
  const queries = new URLSearchParams({
    page: page.toString()
  })

  if (limit) queries.append('limit', limit.toString())
  if (sfw) queries.append('sfw', sfw.toString())
  if (filter) queries.append('filter', filter.toString())

  const isSearch = filter || sfw !== undefined

  try {
    const response = await fetch(`${process.env.API_URL}/seasons/now?${queries.toString()}`, {
      cache: isSearch ? 'no-store' : 'force-cache',
      ...(isSearch ? {} : { next: { revalidate: 86400 } })
    })

    const data: ApiResponse<Anime> | ErrorResponse = await response.json()

    if ('error' in data) {
      throw new Error('Response error: ' + data.message)
    }

    return data
  } catch (error) {
    throw new Error('Network error: ' + (error as Error).message)
  }
}

export async function fetchSeasonUpcoming({ page = 1, limit, sfw, filter }: AnimeQueryParameters) {
  const queries = new URLSearchParams({
    page: page.toString()
  })

  if (limit) queries.append('limit', limit.toString())
  if (sfw) queries.append('sfw', sfw.toString())
  if (filter) queries.append('filter', filter.toString())
  
  const isSearch = filter || sfw !== undefined

  try {
    const response = await fetch(`${process.env.API_URL}/seasons/upcoming?${queries.toString()}`, {
      cache: isSearch ? 'no-store' : 'force-cache',
      ...(isSearch ? {} : { next: { revalidate: 86400 } })
    })

    const data: ApiResponse<Anime> | ErrorResponse = await response.json()

    if ('error' in data) {
      throw new Error('Response error: ' + data.message)
    }

    return data
  } catch (error) {
    throw new Error('Network error: ' + (error as Error).message)
  }
}

export async function fetchAnimes({ page = 1, q, type, rating, sfw }: AnimeQueryParameters) {
  const queries = new URLSearchParams({
    page: page.toString()
  })

  if (q) queries.append('q', q)
  if (type) queries.append('type', type)
  if (rating) queries.append('rating', rating)
  if (sfw) queries.append('sfw', sfw.toString())

  const isSearch = q || type || rating || sfw !== undefined

  try {
    const response = await fetch(`${process.env.API_URL}/anime?${queries.toString()}`, {
      cache: isSearch ? 'no-store' : 'force-cache',
      ...(isSearch ? {} : { next: { revalidate: 86400 } })
    })
    const data: ApiResponse<Anime> | ErrorResponse = await response.json()

    if ('error' in data) {
      throw new Error('Response error: ' + data.message)
    }

    return data
  } catch (error) {
    throw new Error('Network error: ' + (error as Error).message)
  }
}
