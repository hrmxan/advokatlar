<template>
  <section class="news">
    <div class="container">
      <h2>
        {{ $t("news") }}
        <router-link to="./news" href="#!">
          <svg
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 8.65186H17"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M10 1.65186L17 8.65186L10 15.6519"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </router-link>
      </h2>
      <div class="row">
        <div data-aos="fade-up" class="col-12 col-md-4 mb-4">
          <NewsTopCard />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          class="col-12 col-md-4 mb-4"
        >
          <NewsTopCard />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          class="col-12 col-md-4 mb-4"
        >
          <NewsTopCard />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NewsTopCard from "./mini_blocks/NewsTopCard.vue";
export default {
  components: { NewsTopCard },
};
</script>

<style>
</style>