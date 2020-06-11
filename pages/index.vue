<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="testSASS">eShop</h1>
      <p class="testSASS">Testing Global SCSS</p>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Logo
  },
  methods: {
    dispatch() {
      this.$store.dispatch('articles/getproducts')
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
