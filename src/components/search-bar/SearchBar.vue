<script setup>
import { useMainStore } from '@/stores/modules/main';
import { storeToRefs } from 'pinia';
import { computed } from 'vue'

import { formatMonthDay } from '@/utils/format_date'

const mainStore = useMainStore()
const { startDate,endDate } = storeToRefs(mainStore)
const startDateStr = computed(() => formatMonthDay(startDate.value,'MM.DD'))
const endDateStr = computed(() => formatMonthDay(endDate.value,'MM.DD'))
</script>

<template>
  <div class="search-bar">
    <!-- (左)下拉时间 -->
    <div class="select-time">
      <!-- 住 -->
      <div class="item start">
        <div class="tip">住</div>
        <div class="time">{{startDateStr}}</div>
      </div>

      <!-- 离 -->
      <div class="item end">
        <div class="tip">离</div>
        <div class="time">{{endDateStr}}</div>
      </div>
    </div>

    <!-- (中)内容 -->
    <div class="content">
      <div class="keyword">关键字/位置/民宿</div>
    </div>

    <!-- (右) 搜素图标 -->
    <div class="right">
      <!-- <i class="icon-search"></i> -->
        <van-icon class="icon-search" name="search" />
    </div>
  </div>
</template>

<style lang="less" scoped>
// 搜索框
// 左
.search-bar {
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 45px;
  line-height: 45px;
  background-color: #f2f4f6;
  border-radius: 6px;
  color: #999;

  .item {
    display: flex;
    line-height: normal;

    .time {
      position: relative;
      top: 4px;
      margin: 0 10px 0 3px;
      color: #333;
      font-size: 10px;
    }
  }

  .end .time::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: -12px;
    width: 0;
    height: 0;
    border: 4px solid #666;
    border-color: transparent transparent transparent #666;
    border-radius: 3px;
    transform: rotate(45deg);
  }
  // 中
  .content {
    display: flex;
      flex: 1;
    align-items: center;
    line-height: 1;
    padding: 0 8px;
    font-size: 12px;
    border-left: 1px solid #fff;
    height: 100%;

    .keyword {
      min-width: 155px;
    }
  }

  //   右
  .right {
    display: flex;
    align-items: center;
    .icon-search {
      display: inline-block;
      width: 38px;
      height: 38px;
    //   background: url(@/assets/img/home/home-sprite.png) no-repeat;
      line-height: 38px;
    //   font-size: 14px;
        // margin-left: calc(155px - 38px);
        transform: scale(1.5);
    }
  }
}
</style>
