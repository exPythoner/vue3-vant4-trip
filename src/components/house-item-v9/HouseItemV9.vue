<script setup>
import { computed } from "vue"

const props = defineProps({
    itemData: {
        type: Object,
        default: () => ({})
    }
})

// 评分
const rateValue = computed(() => {
    return Number(props.itemData.commentScore)
})
</script>


<template>
    <div class="house-item">
        <!-- 左右边距 -->
        <div class="item-inner">
            <!-- 封面 -->
            <div class="cover">
                <img :src="itemData.image.url" alt="">
            </div>

            <!-- 信息 -->
            <div class="info">
                <!-- 总结 -->
                <div class="summary">{{ itemData.summaryText }}</div>
                <!-- 房屋名称 -->
                <div class="name">{{ itemData.houseName }}</div>
                <!-- 价格 -->
                <div class="price">
                    <!-- 评分 -->
                    <van-rate v-model="rateValue" readonly color="#fff" allow-half :size="15" />
                    <!-- 最终定价 -->
                    <span class="final-price">¥{{ itemData.finalPrice }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.house-item {
    width: 50%;

    .item-inner {
        position: relative;
        margin: 8px;
        overflow: hidden;
        color: #fff;
        border-radius: 6px;
        text-shadow: 0 1px 2px rgba(0 0 0 / .6);
        box-shadow: 0 2px 4px rgba(0 0 0 / .3);
        height: 218px;

        .cover {
            img{
                width: 100%;
            }
        }

        .info {
            position: absolute;
            bottom: 0;
            left: 0;
            padding: 8px 10px;

            .summary {
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
                justify-content: space-between;
            }
        }
    }
}
</style>