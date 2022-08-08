<template>
  <main class="news-view">
    <TopTitle :title="$t('newsTitle')" :subtitle="$t('newsSubtitle')" />
    <NewsTopBody />
    <NewsBody />
  </main>
</template>

<script>
import TopTitle from "@/components/TopTitle.vue";
import NewsTopBody from "../components/NewsTopBody.vue";
import NewsBody from "@/components/NewsBody.vue";
export default {
  components: { TopTitle, NewsTopBody, NewsBody },
};
</script>
<style>
main.news-view .topTitle {
  background-image: url('@/assets/img/news_bg.png'), url('@/assets/img/top__title_line.png') !important;
  }
</style>