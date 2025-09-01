export interface AnimeQueryParameters {
  type?: string,
  filter?: string,
  rating?: string,
  sfw?: boolean,
  page: number,
  limit?: number,
  q?: string
}
