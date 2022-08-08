<template>
  <section>
    <div class="container">
      <h2>
        {{ $t("news") }}
      </h2>
      <div class="row">
        <div data-aos="fade-up" class="col-12 mb-4">
          <NewsBodyCard />
        </div>
        <div data-aos="fade-up" class="col-12 mb-4">
          <NewsBodyCard />
        </div>
        <div data-aos="fade-up" class="col-12 mb-4">
          <NewsBodyCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsBodyCard from "./mini_blocks/NewsBodyCard.vue";
export default {
  components: { NewsBodyCard },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 40px;
}
h2 {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
  margin-bottom: 40px;
}
</style>