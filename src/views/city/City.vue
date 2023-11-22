<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'


import { useCity } from '@/stores/modules/city'
import CityGroup from '@/views/city/cpns/CityGroup.vue'

//  search 搜索
const searchValue = ref('')

const router = useRouter()
const cancelClick = () => {
  router.back()
}

// tabbar标签页
const tabActive = ref(0)

// 发起网络请求: 获取所有城市数据
const cityStore = useCity()
cityStore.fetchAllCityData()
const { allCities } = storeToRefs(cityStore)

// 当前城市组
const currentCityGroup = computed(() => allCities.value[tabActive.value])

</script>


<template>
  <div class="city hide-tabbar">
    <!-- 顶部 top -->
    <div class="top">

      <!-- search 搜索 -->
      <van-search v-model="searchValue" placeholder="城市/区域/位置" shape="round" show-action @cancel="cancelClick" />

      <!-- tabbar标签页 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value,key,index) in allCities" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>

    </div>

    <!-- 内容 -->
    <div class="content">
      <!-- 性能优化 -->
      <template v-for="(value,key,index) in allCities" :key="index">
        <CityGroup v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top {
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100vh - 98px);
  overflow-y: auto;
}
</style>