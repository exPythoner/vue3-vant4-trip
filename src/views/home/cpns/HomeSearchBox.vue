<script setup>
import { computed, ref } from 'vue'
import { useCity } from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import { formatMonthDay, getDiffDays } from '@/utils/format_date'
import { useHome } from '@/stores/modules/home';

//  城市/我的位置
const router = useRouter();
const cityClick = () => {
  router.push("/city");
};

// 获取当前地理位置坐标系
const positionClick = () => {
  navigator.geolocation.getCurrentPosition((res) => {
    console.log(res);
  });
};

const cityStore = useCity()
const { currentCity } = storeToRefs(cityStore)

// 日期范围和日历信息
const calendarShow = ref(false)
const dataRangeClick = () => {
  calendarShow.value = true
}


const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)

// 默认入住时间
const startDate = ref(formatMonthDay(nowDate))
// 默认离店时间
const endDate = ref(formatMonthDay(newDate))
// 停留时间
const stayCount = ref(getDiffDays(nowDate, newDate))

// 日历选择 
const onConfirm = (value) => {
  const startCalendar = value[0]
  const endCalendar = value[1]

  // 修改入住和离店时间
  startDate.value = formatMonthDay(startCalendar)
  endDate.value = formatMonthDay(endCalendar)

  // 修改停留时间
  stayCount.value = getDiffDays(startCalendar, endCalendar)

  // 关闭日历
  calendarShow.value = false
}

const homeStore = useHome()
const { hotSuggests } = storeToRefs(homeStore)

// 优化style
for (var i = 0; i < hotSuggests.value.length; i++) {
  const hf = hotSuggests.value[i]
}

const hs = computed(() => {
  return {
    style: {
      color: hotSuggests.value[i]?.tagText.color,
      background: hotSuggests.value[i]?.tagText.background.color
    }
  }
})

// 开始搜索
const searchBtnClick = () => {
  console.log(1)
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value
    }
  })
}

</script>

<template>
  <div class="home-search-box">
    <!-- 城市/我的位置 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="data-range section bottom-gray-line" @click="dataRangeClick">

      <div class="start">
        <div class="date">
          <div class="tip">入住</div>
          <div class="time">{{ startDate }}</div>
        </div>
      </div>

      <div class="stay">共 {{ stayCount }} 晚 </div>
      <div class="end">
        <div class="tip">离店</div>
        <div class="time">{{ endDate }}</div>
      </div>
    </div>

    <!-- 日历信息 -->
    <van-calendar v-model:show="calendarShow" @confirm="onConfirm" color="#ff9854" type="range" :round="false" :show-confirm="false" />

    <!-- 价格不限/人数不限 -->
    <div class="price-counter section bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>

    <!-- 关键字/位置/民宿名 -->
    <div class="keywords section bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议(网络数据) -->
    <div class="hot-suggests section">
      <template v-for="(item,index) in hotSuggests" :key="index">
        <div class="item" :style="hs.style">{{ item.tagText.text }}</div>
      </template>
    </div>

    <!-- 开始搜索 -->
    <div class="search-btn section" @click="searchBtnClick">
      <div class="btn">开始搜索</div>
    </div>


  </div>
</template>

<style lang="less" scoped>
.home-search-box {
  // 城市/我的位置
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    height: 44px;
    .city {
      font-size: 15px;
      color: #333;
    }
    .position {
      width: 72px;
      .text {
        font-size: 12px;
        color: #666;
      }

      img {
        margin-left: 5px;
        height: 18px;
        height: 18px;
      }
    }
  }

  // 日期范围
  .data-range {
    .date {
      .tip {
        font-size: 12px;
      }
      .time {
        margin-top: 3px;
        color: #333;
      }
    }
  }

  // 价格不限/人数不限
  .price-counter {
    .start {
      display: flex;
      flex: 1;
      align-items: center;
      border-right: 1px solid var(--line-color);
      height: 100%;
    }
    .end {
      margin-left: 2em;
    }
  }

  // 热门建议
  .hot-suggests {
    margin-top: 6px;
    flex-wrap: wrap;
    justify-content: flex-start;
    height: auto;
    padding: 0 20px;
    .item {
      margin: 6px;
      padding: 4px 8px;
      border-radius: 14px;
      font-size: 12px;
    }
  }

  // 开始搜索
  .search-btn {
    margin-top: 10px;
    justify-content: center;
    padding: 0 20px;

    .btn {
      width: 342px;
      height: 38px;
      line-height: 38px;
      max-height: 50px;
      text-align: center;
      color: #fff;
      background-image: var(--theme-linear-gradient);
      // background-color: var(--primary-color);
      font-size: 18px;
      font-weight: 500;
      border-radius: 50px;
    }
  }

}
</style>
