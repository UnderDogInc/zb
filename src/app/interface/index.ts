interface Column {
  name: string
  title: string
  sortable?: boolean
}
interface IPagination {
  modelValue: number
  count: number
  isDisabled?: boolean
}
interface Item {
  id: number
  [key: string]: any
}

export type {
  Item,
  Column,
  IPagination
}
