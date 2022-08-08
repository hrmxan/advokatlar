<template>
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
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
  color: #0066cc;

  &::after {
    width: 100%;
  }
}
</style>