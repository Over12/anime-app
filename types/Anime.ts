import { Genre } from './Genre'

export interface Anime {
  mal_id: number,
  url: string,
  images: {
    webp: {
      image_url: string,
      small_image_url: string
      large_image_url: string
    }
  },
  trailer: {
    url: string | null,
    embed_url: string | null,
    images: {
      image_url: string | null,
      small_image_url: string | null,
      medium_image_url: string | null,
      large_image_url: string | null,
      maximum_image_url: string | null
    }
  },
  title: string,
  title_english: string | null,
  type: string,
  source: string,
  episodes: number | null,
  status: string,
  airing: boolean,
  duration: string,
  rating: string,
  score: number | null,
  scored_by: number | null,
  rank: number | null,
  popularity: number | null,
  synopsis: string,
  background: string,
  season: string | null,
  year: number | null,
  genres: Genre[]
}
