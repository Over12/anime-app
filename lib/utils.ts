import { Anime } from '@/types/Anime'

export function deleteDuplicate(arr: Anime[]) {
  return arr.filter((anime, index, self) => index === self.findIndex((a) => a.mal_id === anime.mal_id))
}
