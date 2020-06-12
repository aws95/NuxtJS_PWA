<template>
  <div class="product-list container card-body">
    <h3>Choose a product :</h3>
    <div class="row">
      <div class="col" v-for="product in products" :key="product._id">
        <div class="card shadow-sm p-3 mb-5 bg-light rounded">
          <nuxt-link
            rel="preload"
            class="text-dark"
            :to="{name : 'slug',params:{slug : product.slug,id : product._id} }"
          >{{product.product}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters} from "vuex";
export default {
  data() {
    this.watch = this.$route.params.watchesId;
    return {
      products: []
    };
  },
  created() {
    this.temp = this.getProducts.filter(
      categ => categ.subcategory == this.watch
    );
    this.products = this.temp;
  },
  computed: {
    ...mapGetters({
      getProducts: "getProducts"
    })
  }
};
</script>

<style scoped>
.product-list {
  align-content: center;
}
.card {
  align-items: center;
  margin-bottom: 10px;
}
</style>