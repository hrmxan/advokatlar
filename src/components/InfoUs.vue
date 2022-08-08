<template>
  <section class="infoUs">
      <div class="container">
        <div class="row infoUs__body">
          <div class="col-12 order-1 order-md-0 col-md-6 left">
            <h1 data-aos="fade-up">
              {{$t('topTitleHome')}}
            </h1>
            <p data-aos="fade-up" data-aos-delay="200">
              {{$t('topSubtitleHome')}}
            </p>
            <a data-aos="fade-up" data-aos-delay="400" href="#!" class="my-full-button">
              {{$t('seeMore')}}
            </a>
          </div>
          <div class="col-12 order-0 order-md-1 col-md-6 right">
            <img data-aos="zoom-in" data-aos-delay="400" src="@/assets/img/advokatlar.png">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>