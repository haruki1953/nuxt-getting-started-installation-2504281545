import { defineNuxtPlugin } from '#app'
import { usePinia } from '#imports'
import persistedState from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((_nuxtApp) => {
  // 客户端才能使用 persistedState
  if (import.meta.client) {
    // 这是 Nuxt 自动创建的 pinia 实例
    const pinia = usePinia()
    // 使用 pinia-plugin-persistedstate 插件，持久化
    pinia.use(persistedState)
  }
})
