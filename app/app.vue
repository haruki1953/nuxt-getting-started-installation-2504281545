<script setup lang="ts">
const testStore = useTestStore()
const countAdd = () => {
  testStore.testValAdd()
  ElMessage(`testVal ${testStore.testVal}`)
}
countAdd()
</script>
<template>
  <div>
    <div class="test-box">
      <div class="test">测试 {{ testStore.testVal }}</div>
      <div>
        <el-button @click="countAdd">button</el-button>
        <ElButton :icon="ElIconEditPen" type="success">button</ElButton>
        <LazyElButton type="warning">lazy button</LazyElButton>
      </div>
    </div>

    <!-- <NuxtRouteAnnouncer />

    <NuxtWelcome /> -->
  </div>
</template>
<style lang="scss" scoped>
.test-box {
  .test {
    background-color: red;
  }
}
</style>
