<template>
  <main class="lawyers">
    <TopTitle :title="$t('lawyersTitle')" :subtitle="$t('lawyersSubtitle')" />
    <LawyersFilter />
    <LawyersBody />
  </main>
</template>

<script>
import LawyersBody from '@/components/LawyersBody.vue';
import LawyersFilter from '@/components/mini_blocks/LawyersFilter.vue';
import TopTitle from '@/components/TopTitle.vue';
export default { components: { LawyersBody, LawyersFilter, TopTitle } };
</script>

<style>
  main.lawyers .topTitle {
  background-image: url('@/assets/img/lawyers_bg.png'), url('@/assets/img/top__title_line.png') !important;
  }
</style>