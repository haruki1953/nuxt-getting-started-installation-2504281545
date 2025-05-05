<script setup lang="ts">
import { webName } from '@/config'
import { onMounted } from 'vue'
import { dataFirstLoadService } from './services'

// 在服务端onMounted不会执行，应在setup获取数据
if (import.meta.server) {
  dataFirstLoadService()
}
onMounted(async () => {
  dataFirstLoadService()
})

useHead({
  title: webName
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
