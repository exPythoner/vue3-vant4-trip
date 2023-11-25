import { defineStore } from "pinia";

// 今天时间
const startDate = new Date();

// 明天时间
const endDate = new Date();
endDate.setDate(startDate.getDate() + 1);

export const useMainStore = defineStore("main", {
    state: () => ({
        startDate: startDate,
        endDate: endDate,
    }),
});
