<template>
  <div class="container">
    <div>
      <NotFound />
    </div>
  </div>
</template>

<script>
import NotFound from "~/components/NotFound.vue";
import Navbar from "~/components/Navbar.vue";

export default {
  components: {
    NotFound,
    Navbar
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
