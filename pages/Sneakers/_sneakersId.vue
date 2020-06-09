<template>
  <div class="product-list container card-body">
    <h3>Choose a product :</h3>
    <div class="row">
      <div class="col" v-for="product in products" :key="product.productId">
        <div class="card shadow-sm p-3 mb-5 bg-light rounded">
          <nuxt-link rel="preload" class="text-dark" :to="`/${product.productId}`">{{product.name}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    this.sneaker = this.$route.params.sneakersId;
    return {
      products: []
    };
  },
  computed: mapGetters({
    articles: "articles/getSneakers"
  }),
  created() {
    this.temp = this.articles.filter(categ => categ.subCateg == this.sneaker);
    this.products = this.temp[0].value;
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