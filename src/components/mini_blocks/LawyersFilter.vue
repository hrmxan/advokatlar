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
      ],
    };
  },
  methods: {
    ...mapActions(["getContragentslist"]),
    nameWithLang({ name }) {
      return `${name}`;
    },
  },
  mounted() {
    this.getContragentslist();
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