import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', {
    state: () =>{
        return { count: 0, info: '' }
    },
    // cou1d also be defined as
    // state: ( => ({ count: 0 })
    getters: {
      getInfo(state) {
        return state.info + 123
      }
    },
    actions: {
        increment() {
            // 在Vuex中我们需要搞两步: 1.定义mutations 2.提交mutations
            this.count++
        },
    },
})