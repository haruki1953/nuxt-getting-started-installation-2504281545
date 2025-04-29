<script setup lang="ts">
const a = 1
if (a === 1) {
  console.log(a)
}
</script>
<template>
  <div>
    <div class="test-box">
      <div class="test">测试</div>
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
