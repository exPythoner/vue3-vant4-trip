<script setup>
import { ref,watch } from 'vue'

import { tabbarData } from '@/assets/data/tabbarData'
import { getAssetURL } from '@/utils/load_assets'
import { useRoute } from 'vue-router'

const tabbarActive = ref(0);
const route = useRoute()
watch(route,newRoure => {
  const index = tabbarData.findIndex(item => item.path === newRoure.path)
  if(index === -1) return
  tabbarActive.value = index
})
</script>


<template>
  <div class="tab-bar">
    <van-tabbar v-model="tabbarActive" active-color="#ff9854">
      <template v-for="(item,index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path" :icon="item.icon" >
          <span>{{ item.text }}</span>
          <template #icon>
            <van-icon :name="item.icon" avtive-color="#ff9854" />
          </template>
          <!-- <span>{{ item.text }}</span> -->
          <!-- <template #icon>
            <img v-if="tabbarActive !== index" :src="getAssetURL(item.image)" alt="">
            <img v-else :src="getAssetURL(item.imageActive)" alt="">
          </template> -->
        </van-tabbar-item>
      </template>
    </van-tabbar>

  </div>
</template>

<style lang="less" scoped></style>