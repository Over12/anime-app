export interface ApiResponse<T> {
  data: T | T[],
  pagination?: Pagination
}

export interface Pagination {
  last_visible_page: number,
  has_next_page: boolean,
  current_page: number
}

export interface ErrorResponse {
  status: number,
  type: string,
  message: string,
  error: string,
  report_url: string
}
