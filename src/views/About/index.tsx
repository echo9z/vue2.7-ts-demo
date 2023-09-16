import { defineComponent, ref } from 'vue'
import Test from '@/components/Test.vue'

const About = defineComponent({
  setup() {
    const count = ref(0);
    const title = ref('About页面')
    const inc = () => {
      count.value++;
    };

    return () => (
      <div>
        <h2>{title.value}</h2>
        <div onClick={ inc }>{count.value}</div>
        <Test />
      </div>
    );
  },
});

export default About;