<script setup>
import { computed } from "vue";

const props = defineProps({
  itemData: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="house-item">
    <!-- 左右边距 -->
    <div class="item-inner">
      <!-- 封面 -->
      <div class="cover">
        <img :src="itemData.image.url" alt="" />
      </div>

      <!-- 信息 -->
      <div class="info">
        <!-- 定位 -->
        <div class="location">
          <img src="@/assets/img/home/location-icon.png" alt="" />
          <span class="text">{{ itemData.location }}</span>
        </div>

        <!-- 总结 -->
        <div class="summary">{{ itemData.summaryText }}</div>
        <!-- 房屋名称 -->
        <div class="name">{{ itemData.houseName }}</div>
        <!-- 价格 -->
        <div class="price">
          <!-- 最终定价 -->
          <span class="final-price">¥{{ itemData.finalPrice }}</span>
          <!-- 原价 -->
          <div class="old-price">¥{{ itemData.productPrice }}</div>
          <!-- 提示 -->
          <div class="tip">{{ itemData.priceTipBadge.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
// 房屋列表
.house-item {
  width: 50%;

  .item-inner {
    position: relative;
    margin: 8px;
    overflow: hidden;
    color: #999;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0 0 0 / 0.3);
    height: 218px;

    .cover {
      img {
        width: 100%;
      }
    }

    .info {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 8px 10px;

      .location {
        display: flex;
        align-items: center;
        img {
          width: 9px;
          height: 13px;
        }
        .text {
          margin-left: 2px;
          color: #666;
        }
      }
      .summary {
        margin-top: 3px;
        font-size: 12px;
      }

      .name {
        margin: 5px 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }

      .price {
        display: flex;
        justify-content: flex-start;

        .final-price {
          font-size: 15px;
          color: #ff9854;
        }

        .old-price {
          margin-left: 2px;
          color: #999;
          text-decoration: line-through;
          font-size: 12px;
        }

        .tip {
          position: relative;
          top: -4px;
          margin-left: 2px;
          padding: 0 4px;
          background-image: linear-gradient(270deg, #f66, #fb4b4b);
          color: #fff;
          border-radius: 50px;
          font-size: 8px;
          line-height: 15px;
        }
      }
    }
  }
}
</style>
