<template>
  <div class="product container card-body">
    <h1>Product : {{product.product}}</h1>
    <h5>Product ID : {{product._id}}</h5>
    <h5>Product Category : {{product.category}}</h5>
    <h5>Product SubCategory : {{product.subcategory}}</h5>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    this.routeSlug = this.$route.params.slug;
    return {
      product: []
    };
  },
  created() {
    this.product = this.getProducts.find(
      product => product.slug == this.routeSlug
    );
  },
  computed: {
    ...mapGetters({
      getProducts: "getProducts"
    })
  },
  middleware: "routeChecker"
};
</script>

<style scoped>
.product {
  align-content: center;
}
.card {
  align-items: center;
  margin-bottom: 10px;
}
</style>