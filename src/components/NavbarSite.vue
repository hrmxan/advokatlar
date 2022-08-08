<template>
  <div>
    <header>
      <section
        class="sidebar"
        @click="colapse = false"
        :class="{ close: !colapse }"
      >
        <div class="sidebar__body">
          <div class="kres">
            <a href="#!" @click.prevent="colapse = false" class="closeSidebar">
              <img src="@/assets/img/icons/krestik.svg" />
            </a>
          </div>
          <ul class="navBar__colapse">
            <li>
              <router-link to="/"> {{$t('home')}} </router-link>
            </li>
            <li>
              <router-link to="/news"> {{$t('news')}} </router-link>
            </li>
            <li>
              <router-link to="/lawyers"> {{$t('lawyers')}} </router-link>
            </li>
          </ul>
        </div>
      </section>
      <div class="container">
        <nav>
          <router-link to="/" class="logo">
            <img src="@/assets/img/logo.png" />
            <div class="logo__titles">
              <strong>
                {{$t('ORAV')}}
              </strong>
            </div>
          </router-link>
          <div class="navBar d-none d-lg-flex">
            <NavbarLinks />
          </div>
          <div class="tools">
            <b-dropdown
              right
              :text="lang"
              variant="outline-primary"
              class="mx-3"
            >
              <b-dropdown-item
                @click="changeLang(l)"
                href="#"
                v-for="(l, index) in langs"
                :key="index"
              >
                <img
                  class="my__flag"
                  :src="require(`@/assets/img/icons/${l}.png`)"
                />
                {{ $t(`langs.${l}`) }}
              </b-dropdown-item>
            </b-dropdown>
            <a
              href="#!"
              @click.prevent="colapse = true"
              class="colapse__button d-lg-none"
            >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>
<script>
import NavbarLinks from "./mini_blocks/NavbarLinks.vue";
import toastOptions from "@/core/toas.options";
export default {
  components: { NavbarLinks },
  data() {
    return {
      colapse: false,
      lang: "Uz",
      langs: ["uz", "en", "ru"],
      toastOptions
    };
  },
  methods: {
    changeLang(l) {
      localStorage.setItem("lang", l);
      this.$i18n.locale = l;
      this.lang = this.$t(`langs.${l}`);
    },
  },
  created() {
    this.lang = this.$t(`langs.${this.$i18n.locale}`);
    this.$toast.success('Hello world!',this.toastOptions)
  },
};
</script>

<style scoped lang="scss">
.router-link-exact-active {
  background: #fbfbfb;
  color: #006be8;
}
.logo {
  &.router-link-exact-active {
    background: transparent;
  }
}
.option__image {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}
.my__flag {
  width: 24px;
  height: 24px;
}
</style>