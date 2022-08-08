<template>
  <div>
    <NavbarSite/>
    <router-view></router-view>
    <FooterSite/>
  </div>
</template>

<script>
import NavbarSite from '@/components/NavbarSite.vue';
import FooterSite from '@/components/FooterSite.vue';
export default {
    components: { NavbarSite, FooterSite }
}
</script>

<style>
  
</style>