import { defineStore } from "pinia";
import request from '@/service'

export const useArticleStore = defineStore("article", {
  state: () => {
    return { artList: [] };
  },
  // cou1d also be defined as
  // state: ( => ({ count: 0 })
  actions: {
    async getArticleList() {
      // 在Vuex中我们需要搞两步: 1.定义mutations 2.提交mutations
      const res = await request.get('https://www.echouu.com/api/articles/list?page=1&pageSize=5');
      this.artList = res.data.list
    },
  },
});
