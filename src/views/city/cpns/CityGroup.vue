<script setup>
import { useCity } from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// 右侧索引栏的优化(加个‘#’)
const indexList = computed(() => {
    const list = props.groupData.cities.map(item => item.group)
    list.unshift('#')
    return list
})

// 城市回显
const cityStore = useCity()
const {currentCity } = storeToRefs(cityStore) 
const router = useRouter()
const cityClick = city => {
    currentCity.value = city
    router.back()
}

</script>


<template>
  <div class="city-group">
    <!-- IndexBar 索引栏 -->
    <van-index-bar highlight-color="#ff9854"
    :index-list="indexList" 
    
    >
      <!-- 热门城市 -->
       <van-index-anchor index="热门" />
       <div class="list">
        <template v-for="(city,index) in groupData?.hotCities" :key="index">
            <div class="city" @click="$event => cityClick(city)">{{ city.cityName }}</div>
        </template>
       </div>


      <!-- 所有城市 -->
      <template v-for="(group,index) in groupData?.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city,indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName"  @click="$event => cityClick(city)"/>
        </template>
      </template>
    </van-index-bar>

  </div>
</template>

<style lang="less" scoped>

// 热门城市
.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    padding-right: 25px;

    .city {
        margin: 6px;
        width: 70px;
        height: 28px;
        line-height: 28px;
        background-color: #fff4ec;
        border-radius: 14px;
        text-align: center;
        font-size: 12px;
    }
}
</style>