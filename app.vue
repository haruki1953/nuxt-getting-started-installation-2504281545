<script setup lang="ts">
const a = 1
if (a === 1) {
  console.log(a)
}
ElMessage('hello')
</script>
<template>
  <div>
    <div class="test-box">
      <div class="test">测试</div>
      <div>
        <el-button @click="ElMessage('hello')">button</el-button>
        <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
        <LazyElButton type="warning">lazy button</LazyElButton>
      </div>
    </div>

    <NuxtRouteAnnouncer />

    <NuxtWelcome />
  </div>
</template>
<style lang="scss" scoped>
.test-box {
  .test {
    background-color: red;
  }
}
</style>
