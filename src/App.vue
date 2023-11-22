<script setup>

import TabBar from '@/components/tabbar/TabBar.vue'

</script>

<template>
  <div class="app">
    <router-view />
    <TabBar />
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
