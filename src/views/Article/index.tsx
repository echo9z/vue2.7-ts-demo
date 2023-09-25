import { defineComponent, ref } from 'vue'
import ArticleList from '@/components/article-list';
const Article = defineComponent({
  setup() {
    const title = ref('article页面')

    return () => (
      <div>
        <h2>{title.value}</h2>
        <ArticleList />
      </div>
    );
  },
});

export default Article;