export interface MovieI {
  createdAt: string
  genres: string[]
  id: number
  imageurls: string[]
  imdbId: string
  imdbrating: number
  quotes: string[]
  released: number
  reviews: string[]
  runtime: number
  summary: string
  synopsis: string
  title: string
  trailerUrl: string[]
  type: string
  updatedAt: string
}

export interface MovieRequestParamsI {
  maxYear: number
  minYear: number
  genres: string
  title: string
  page: number
  sort: string
}

export interface ActivityI {
  TitleId: number
  activityType: string
  createdAt: string
  id: number
  title: { title: string }
  updatedAt: string
  user: { username: string }
  userId: number
}