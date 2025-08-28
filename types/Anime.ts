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
    url: string,
    embed_url: string,
    images: {
      image_url: string,
      small_image_url: string,
      medium_image_url: string,
      large_image_url: string,
      maximum_image_url: string
    }
  },
  title: string,
  title_english: string,
  type: string,
  source: string,
  episodes: number,
  status: string,
  airing: boolean,
  duration: string,
  rating: string,
  score: number,
  scored_by: number,
  rank: number,
  popularity: number,
  synopsis: string,
  background: string,
  season: string,
  year: number,
  genres: Genre[]
}
