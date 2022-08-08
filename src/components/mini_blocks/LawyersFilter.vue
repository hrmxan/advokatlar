<template>
  <section class="filter">
    <div class="container-fluid">
      <div data-aos="fade-up" class="filter__body">
        <div class="container">
          <form>
            <div class="form-row row">
              <div class="col-3 my_multiselect">
                <multiselect
                  v-model="viloyat"
                  :options="options"
                  :custom-label="nameWithLang"
                  :show-labels="false"
                  :placeholder="$t('region')"
                >
                  <template slot="noResult">{{ $t("noInfoFound") }}</template>
                </multiselect>
              </div>
              <div class="col-3 my_multiselect">
                <multiselect
                  v-model="tashkilot"
                  :options="optionsTashkilot"
                  :custom-label="nameWithLang"
                  :show-labels="false"
                  :placeholder="$t('organization')"
                >
                  <template slot="noResult">{{ $t("noInfoFound") }}</template>
                </multiselect>
              </div>
              <div class="col-3 my_multiselect">
                <multiselect
                  v-model="mutahasislik"
                  :options="optionsMutahasislik"
                  :custom-label="nameWithLang"
                  :show-labels="false"
                  :placeholder="$t('specialization')"
                  :max-height="250"
                  @scroll="onScroll"
                >
                  <template slot="noResult">{{ $t("noInfoFound") }}</template>
                </multiselect>
              </div>
              <div class="col-3 my_multiselect">
                <input
                  class="form-control rounded-1 shadow-none"
                  type="text"
                  :placeholder="$t('FIO')"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions } from "vuex";

import "vue-multiselect/dist/vue-multiselect.min.css";
export default {
  components: { Multiselect },
  data() {
    return {
      viloyat: null,
      options: [
        { name: "Namangan", value: "namangan" },
        { name: "Toshkent", value: "toshkent" },
        { name: "Farg'ona", value: "fargona" },
      ],
      tashkilot: null,
      optionsTashkilot: [
        { name: "Tashkilot1", value: "tashkilot1" },
        { name: "Tashkilot2", value: "tashkilot2" },
        { name: "Tashkilot3", value: "tashkilot3" },
      ],
      mutahasislik: null,
      optionsMutahasislik: [
        { name: "Mutahasislik1", value: "mutahasislik1" },
        { name: "Mutahasislik2", value: "mutahasislik2" },
        { name: "Mutahasislik3", value: "mutahasislik3" },
        { name: "Mutahasislik4", value: "mutahasislik4" },
        { name: "Mutahasislik5", value: "mutahasislik5" },
        { name: "Mutahasislik6", value: "mutahasislik6" },
        { name: "Mutahasislik7", value: "mutahasislik7" },
        { name: "Mutahasislik8", value: "mutahasislik8" },
        { name: "Mutahasislik9", value: "mutahasislik9" },
        { name: "Mutahasislik10", value: "mutahasislik10" },
        { name: "Mutahasislik11", value: "mutahasislik11" },
        { name: "Mutahasislik12", value: "mutahasislik12" },
        { name: "Mutahasislik13", value: "mutahasislik13" },
        { name: "Mutahasislik14", value: "mutahasislik14" },
        { name: "Mutahasislik15", value: "mutahasislik15" },
        { name: "Mutahasislik16", value: "mutahasislik16" },
        { name: "Mutahasislik17", value: "mutahasislik17" },
      ],
      isVisible: false,
      getCount: 0,
    };
  },
  methods: {
    ...mapActions(["getContragentslist"]),
    nameWithLang({ name }) {
      return `${name}`;
    },
    onScroll(e) {
      console.log(e);
    },
  },
  mounted() {
    // this.getContragentslist();
    let scrolWrap = document.querySelectorAll(".multiselect__content-wrapper");
    scrolWrap.forEach((item) => {
      item.addEventListener("scroll", () => {
        let sb = item.querySelector(".multiselect__content");
        if (+item.offsetHeight + item.scrollTop >= sb.offsetHeight && this.getCount < 1) {
          this.getCount++;
          this.optionsMutahasislik = [
            ...this.optionsMutahasislik,
            ...this.optionsMutahasislik,
          ];
          this.getCount = 0;
          console.log(this.optionsMutahasislik);
        }
      });
    });
  },
};
</script>

<style lang="scss">
.filter__body {
  position: relative;
  background-color: #fff;
  z-index: 10;
  border: 1px solid #ebebeb;
  box-shadow: 0 0 10px rgb(0 0 0 / 11%);
  padding: 30px 0;
}
section.filter {
  margin: 40px 0;
}

// change multiselect item hover color
.multiselect__option--highlight {
  background-color: rgb(0 107 232);
}
.my_multiselect {
  .multiselect__tags {
    padding: 8px 16px;
    * {
      margin: 0;
    }
  }
  .multiselect__placeholder {
    padding: 0;
  }
}
</style>
