export interface CardType {
  value: string
  xmlId: string
}

export interface Card {
  code: string
  date: number
  image: string
  link: string
  name: string
  previewText: string
  type: CardType
}

export interface Pagination {
  current: number
  total: number
}

export interface Response {
  nav: Pagination
  items: Card[]
}
