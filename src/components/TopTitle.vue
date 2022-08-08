<template>
  <section class="topTitle">
      <h1 data-aos="fade-up">
        {{title}}
      </h1>
      <h3 data-aos="fade-up" data-aos-delay="300">
        {{subtitle}}
      </h3>
    </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Heading title"
    },
    subtitle: {
      type: String,
      default: "Heading subtitle text"
    }
  }
}
</script>

<style>

</style>