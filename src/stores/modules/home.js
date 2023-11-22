import { defineStore } from "pinia";

import { getHotSuggests, getCategories, getHouseList } from "@/services";

export const useHome = defineStore("home", {
    state: () => ({
        hotSuggests: [],
        categories: [],
        houseList: [],
        nextPage: 1,
    }),

    actions: {
        async fetchHotSuggests() {
            const res = await getHotSuggests();
            this.hotSuggests = res.data;
        },

        async fetchCategories() {
            const res = await getCategories();
            this.categories = res.data;
        },
        async fetchHouseList() {
            const res = await getHouseList(this.nextPage++);
            this.houseList.push(...res.data);
        },
    },
});
