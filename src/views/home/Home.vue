<script setup>
import HomeNavBar from "./cpns/HomeNavBar.vue";
import HomeBanner from "./cpns/HomeBanner.vue";
import HomeSearchBox from "./cpns/HomeSearchBox.vue";
import HomeCategories from "./cpns/HomeCategories.vue";
import HomeHouseList from "./cpns/HomeHouseList.vue";

import { useHome } from "@/stores/modules/home";

const homeStore = useHome();
homeStore.fetchHotSuggests();
homeStore.fetchCategories();
homeStore.fetchHouseList();

// 加载更多
const moreBtnClick = () => {
  console.log(1);
  homeStore.fetchHouseList();
};
</script>

<template>
  <div class="home">
    <div class="top">
      <HomeNavBar />
      <HomeBanner />
    </div>

    <div class="content">
      <HomeSearchBox />
      <HomeCategories />
      <HomeHouseList />

      <!-- 加载更多 -->
      <button class="more-btn" @click="moreBtnClick">加载更多</button>
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
    overflow-y: auto;
}
</style>
