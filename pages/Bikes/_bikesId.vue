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
export default {
  async fetch({ $axios, store }) {
    const ip = await $axios.get("http://localhost:8080/products");
    store.commit("SET_IP", ip);
  },
  data() {
    this.bike = this.$route.params.bikesId;
    return {
      products: []
    };
  },
  created() {
    this.temp = this.$store.state.products.data.filter(
      categ => categ.subcategory == this.bike
    );
    this.products = this.temp;
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