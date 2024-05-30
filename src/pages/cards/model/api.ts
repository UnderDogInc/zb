import axios from "axios"

export async function fetchCards(page:number) {
  return await axios(`https://flems.github.io/test/api/news/${page}`)
}
