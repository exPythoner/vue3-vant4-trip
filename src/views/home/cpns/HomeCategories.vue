<script setup>
import { storeToRefs } from 'pinia'
import { useHome } from "@/stores/modules/home"

const homeStore = useHome()
// 推荐分类
const { categories } = storeToRefs(homeStore)

</script>


<template>
  <div class="home-categories">
    <!-- 推荐分类(网络数据) -->
    <div class="categories">
      <template v-for="(item,index) in categories" :key="item.id">
        <div class="item">
          <img :src="item.pictureUrl" alt="">
          <div class="text">{{ item.title }}</div>
        </div>
      </template>
    </div>

  </div>
</template>

<style lang="less" scoped>
// 推荐分类
.categories {
  margin-top: 10px;
  display: flex;
  // justify-content: center;
  align-items: center;
  overflow-x: auto;
  padding: 0 14px;

  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    width: 72px;
    flex-shrink: 0;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      margin-top: 4px;
      font-size: 12px;
    }
  }
}
</style>