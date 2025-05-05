import type {
  PostGetByCursorQueryType,
  PostGetByCursorRes,
  PostGetByIdQueryType,
  PostGetByIdRes
} from '@/types'
import { http } from '@/tools'

export const postGetByCursorApi = (
  cursorId: string,
  query?: PostGetByCursorQueryType
): PostGetByCursorRes => {
  const slash = cursorId === '' ? '' : '/'
  return http.get(`/post/cursor${slash}${cursorId}`, {
    params: query
  })
}

export const postGetByIdApi = (
  postId: string,
  query?: PostGetByIdQueryType
): PostGetByIdRes => {
  return http.get(`/post/id/${postId}`, {
    params: query
  })
}
