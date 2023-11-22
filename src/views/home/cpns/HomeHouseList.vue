<script setup>
import { useHome } from "@/stores/modules/home";
import { storeToRefs } from "pinia";

import HouseItemV9 from '@/components/house-item-v9/HouseItemV9.vue'
import HouseItemV3 from '@/components/house-item-v3/HouseItemV3.vue'

const homeStore = useHome()
const { houseList } = storeToRefs(homeStore)

</script>


<template>
  <div class="home-house-list">
    <h2 class="title">热门精选</h2>
    <div class="list">
        <template v-for="(item,index) in houseList" :key="index">
            <HouseItemV9 v-if="item.discoveryContentType === 9 " 
                        :item-data="item.data" 
            
            />
            <HouseItemV3 v-else-if="item.discoveryContentType === 3 " 
                        :item-data="item.data" 
            
            />
        </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-house-list {
  padding: 10px 8px;
  .title {
    padding: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>