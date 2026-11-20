import { fetchJson } from './client.ts'

export interface Post {
  id: number
  title: string
  body: string
}

export function fetchPosts(): Promise<Post[]> {
  return fetchJson<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=5')
}
