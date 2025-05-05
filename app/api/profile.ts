import type { ProfileGetAllRes } from '@/types'
import { http } from '@/tools'

export const profileGetAllApi = (): ProfileGetAllRes => {
  return http.get('/profile/all')
}
