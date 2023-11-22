import { createRouter, createWebHashHistory } from "vue-router";

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path:'/',
        redirect:'/home'
    },
    {
        name:'home',
        path:'/home',
        component: () => import('@/views/home/Home.vue')
    },
    {
        name:'favor',
        path:'/favor',
        component: () => import('@/views/favor/Favor.vue')
    },
    {
        name:'order',
        path:'/order',
        component: () => import('@/views/order/Order.vue')
    },
    {
        name:'message',
        path:'/message',
        component: () => import('@/views/message/Message.vue')
    },
    {
        name:'city',
        path:'/city',
        component: () => import('@/views/city/City.vue')
    },
    {
        name:'search',
        path:'/search',
        component: () => import('@/views/search/Search.vue')
    }
  ],
});
