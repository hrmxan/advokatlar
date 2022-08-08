<template>
  <section>
    <div class="container">
      <div class="row">
        <div data-aos="fade-up" class="col-6 col-md-4 col-lg-6">
          <NewsTopCard />
        </div>
        <div data-aos="fade-up" class="col-6 col-md-4 col-lg-3">
          <NewsTopCard />
        </div>
        <div data-aos="fade-up" class="col-4 d-none d-md-flex col-lg-3">
          <NewsTopCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsTopCard from "./mini_blocks/NewsTopCard.vue";
export default { components: { NewsTopCard } };
</script>

<style scoped lang="scss">
[class*="col-"] {
  padding: 0 5px;
}

section {
  margin-top: 40px;
}
</style>