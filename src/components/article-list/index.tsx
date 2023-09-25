import { defineComponent, ref } from 'vue'
import { useArticleStore } from '@/store/modules/article'
const ArticleList = defineComponent({
  setup() {
    const count = ref(0);
    const inc = () => {
      count.value++;
    };

    const articleStore = useArticleStore()
    articleStore.getArticleList()

    return () => (
      <div>
        <div onClick={ inc }>{count.value}</div>
        { articleStore.artList.map(item => (<li>{item.title}</li>)) }
      </div>
    );
  },
});

export default ArticleList;