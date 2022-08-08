<template>
  <div id="app">
    <LoaderView v-if="false" />
    <router-view />
  </div>
</template>

<script>
import LoaderView from "./components/loaderView.vue";
export default {
  components: { LoaderView },
};
</script>

<style lang="scss">
// css
// scss
@import "@/assets/scss/main.scss";

* {
  animation-iteration-count: 1 !important;
}
</style>
