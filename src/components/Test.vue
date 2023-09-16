<!--
* @description t
* @fileName Test.vue
* @author echo9z
* @date 2023/09/14 23:05:37
!-->
<template>
  <div>
    count: {{ count }} <br/>
    count2: {{ count2 }} <br/>
    <button @click="add" >+1</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/modules/count'
export default {
  name: 'TestName',
  created () {
    // const countStore = useCounterStore()
    // this.count = countStore.count
  },
  setup () {
    const countStore = useCounterStore()
    return {
      count2: countStore.count
    }
  },
  data () {
    return {
      count: 0
    }
  },

  methods: {
    add () {

    }
  },
  components: {},

  props: {},

  computed: {},

  // created () {},

  // mounted() {},

  watch: {}

}

</script>
<style lang='' scoped>
</style>
