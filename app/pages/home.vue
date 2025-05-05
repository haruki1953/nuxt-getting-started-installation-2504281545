<script setup lang="ts">
import ProfileCard from './_partials-home/ProfileCard.vue'
import { usePostStore, useStatesStore } from '@/stores'
import { useElementSize } from '@vueuse/core'
import { computed, onMounted, ref, watch } from 'vue'

const postStore = usePostStore()
const statesStore = useStatesStore()

const shouldShowSkeletonOnMounted = ref(false)
let isChecking = false
const checkShouldShowSkeletonOnMounted = async () => {
  if (isChecking) {
    return
  }
  isChecking = true
  if (postStore.isFirstRequest) {
    shouldShowSkeletonOnMounted.value = true
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  shouldShowSkeletonOnMounted.value = false
  isChecking = false
}

watch(
  () => postStore.isFirstRequest,
  () => {
    checkShouldShowSkeletonOnMounted()
  }
)

onMounted(async () => {
  checkShouldShowSkeletonOnMounted()
})

const isShowSkeleton = computed(() => {
  if (shouldShowSkeletonOnMounted.value) {
    // 骨架屏至少显示一段时间
    return true
  }
  if (statesStore.isLoadingPost && postStore.isFirstRequest) {
    return true
  }
  if (postStore.limitedList.length === 0) {
    return true
  }
  return false
})

const refSkeleton = ref<HTMLElement | null>(null)
const skeletonSize = useElementSize(refSkeleton)

const postMode = computed(() => postStore.postsGetMode)
</script>
<template>
  <div>
    <DataContainerMountedMask>
      <Col2Layout>
        <template #colLeftSm>
          <ProfileCard />
        </template>
        <template #colLeft>
          <ProfileCard />
        </template>
        <template #colRight>
          <div class="post-skeleton-container">
            <Transition name="fade-slide">
              <div
                v-if="isShowSkeleton"
                key="skeleton"
                ref="refSkeleton"
                class="post-skeleton"
              >
                <PostGroup :data="[]" />
              </div>
            </Transition>
          </div>
          <div
            v-infinite-scroll="postStore.loadLimited"
            :infinite-scroll-distance="200"
            :infinite-scroll-delay="0"
            :infinite-scroll-immediate="false"
            class="post-container"
            :style="{ transform: `translateY(${skeletonSize.height.value}px)` }"
          >
            <TransitionGroup name="fade-slide-list">
              <!-- <div class="post-box" key="skeleton" v-if="isShowSkeleton">
              <PostGroup :data="[]"></PostGroup>
            </div> -->
              <div
                v-for="postGroup in postStore.limitedList"
                :key="postGroup.map((p) => p.id).toString()"
                class="post-box"
              >
                <PostGroup :data="postGroup" :postMode="postMode" />
              </div>
            </TransitionGroup>
            <div
              v-if="postStore.isHaveMoreLimited && postStore.limitedList.length"
              class="load-button-box"
            >
              <el-button
                text
                type="primary"
                round
                size="small"
                :loading="postStore.isLoadingLimited"
                @click="postStore.loadLimited"
              >
                加载更多
              </el-button>
            </div>
          </div>
        </template>
      </Col2Layout>
    </DataContainerMountedMask>
  </div>
</template>

<style lang="scss" scoped>
.post-skeleton-container {
  position: relative;
  .post-skeleton {
    width: 100%;
    position: absolute;
  }
}
.post-container {
  position: relative;
  transition: transform 0.3s;
  .post-box {
    width: 100%;
  }
}
.load-button-box {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  .el-button {
    width: 50%;
    max-width: 200px;
  }
}
</style>
