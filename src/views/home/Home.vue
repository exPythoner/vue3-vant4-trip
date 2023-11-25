<script setup>
import HomeNavBar from "./cpns/HomeNavBar.vue";
import HomeBanner from "./cpns/HomeBanner.vue";
import HomeSearchBox from "./cpns/HomeSearchBox.vue";
import HomeCategories from "./cpns/HomeCategories.vue";
import HomeHouseList from "./cpns/HomeHouseList.vue";
import SearchBar from '@/components/search-bar/SearchBar.vue'

import { useHome } from "@/stores/modules/home";
import { useScorll } from "@/hooks/useScroll";
import { watch,computed } from "vue";

const homeStore = useHome();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
homeStore.fetchHouseList();

// // 加载更多
// const moreBtnClick = () => {
//   console.log(1);
//   homeStore.fetchHouseList();
// };

// 下拉滚动条加载更多
const { isReachBottom, scrollTop } = useScorll();
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseList().then(() => {
      // 20条数据一加载,滚动是否到底部重新为false
      isReachBottom.value = false;
    });
  }
});


const isShowSearch = computed(() => {
  console.log(scrollTop.value)
  return scrollTop.value >= 500
})
</script>

<template>
  <div class="home">
    <div class="top">
      <HomeNavBar />
      <HomeBanner />
    </div>

    <div class="content">

      <HomeSearchBox />
      <!-- 搜索框 -->
      <div class="search" v-if="isShowSearch">
        <SearchBar/>
      </div>

      <HomeCategories />
      <HomeHouseList />

      <!-- 加载更多 -->
      <!-- <button class="more-btn" @click="moreBtnClick">加载更多</button> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  padding-bottom: 80px;
}

.content {
  // height: calc(100vh - 172px);
  height: calc(100vh - 207px);
  // overflow-y: auto;
}
.search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  color: #f60;
  padding: 8px;
  background-color: #fff;
}
</style>
