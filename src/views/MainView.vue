<template>
  <main>
    <TopTitle :title="$t('homeTitle')" :subtitle="$t('homeSubtitle')" />
    <InfoUs />
    <CountesAdvocats />
    <NewsCards />
  </main>
</template>

<script>
import InfoUs from "../components/InfoUs.vue";
import TopTitle from "../components/TopTitle.vue";
import CountesAdvocats from "../components/CountesAdvocats.vue";
import NewsCards from "../components/NewsCards.vue";
export default {
  components: { InfoUs, TopTitle, CountesAdvocats, NewsCards },
};
</script>

<style>
</style>