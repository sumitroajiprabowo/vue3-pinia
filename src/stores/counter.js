import { defineStore } from "pinia";

export const useCounterStore = defineStore({
   id : "counter",
    state : () => ({
        count : 0
    }),
    getters : {
        getCount : state => state.count,
        doubleCount : state => state.count * 2,
        devideBy: state => (divider) => state.count / divider
    }
});
