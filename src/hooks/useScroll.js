import { onMounted, onUnmounted, ref } from 'vue'

// 防抖 (第三方库 npm i underscore)
import { throttle } from 'underscore'


export const useScorll = () => {
    // 滚动条是否到达底部(默认值为false)
    const isReachBottom = ref(false)

    // 客户端高度(设备视窗高度)
    const clientHeight = ref(0)

    // 滚动距离
    const scrollTop = ref(0)
    // 内容总高度
    const scrollHeight = ref(0)

    // 滚动条监听处理函数(使用了节流函数,300ms)
    const scrollListenerHandler = throttle(() => {
        clientHeight.value = document.documentElement.clientHeight
        scrollTop.value = document.documentElement.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight

        // 如果(客户端高度 + 滚动距离 >= 内容总高度)
        if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
            console.log('滚动到底部了～,正在加载......')
            // 将isReachBottom 赋值为 true
            isReachBottom.value = true
        }
    }, 300)

    // 加载
    onMounted(() => {
        window.addEventListener('scroll', scrollListenerHandler)
    })

    // 卸载
    onUnmounted(() => {
        window.removeEventListener('scroll', scrollListenerHandler)
    })

    return {
        scrollTop,
        isReachBottom
    }
}


