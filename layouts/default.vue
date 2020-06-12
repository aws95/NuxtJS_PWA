<template>
  <div>
    <no-ssr>
      <Navbar />
    </no-ssr>
    <nuxt />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>

<style>
</style>
