<template>
  <div class="product-list container card-body">
    <h3>Choose a product :</h3>
    <div class="row">
      <div class="col" v-for="product in products" :key="product.productId">
        <div class="card shadow-sm p-3 mb-5 bg-light rounded">
          <nuxt-link class="text-dark" :to="`/${product.productId}`">{{product.name}}</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    this.sneaker = this.$route.params.sneakersId;
    return {
      database: [
        {
          subCateg: "Jordans",
          value: [
            {
              productId: "Jordans1",
              name: "Jordans 1"
            },
            {
              productId: "Jordans2",
              name: "Jordans 2"
            },
            {
              productId: "Jordans3",
              name: "Jordans 3"
            }
          ]
        },
        {
          subCateg: "Vans",
          value: [
            {
              productId: "Vans1",
              name: "Vans 1"
            },
            {
              productId: "Vans2",
              name: "Vans 2"
            },
            {
              productId: "Vans3",
              name: "Vans 3"
            }
          ]
        },
        {
          subCateg: "Supreme",
          value: [
            {
              productId: "Supreme1",
              name: "Supreme 1"
            },
            {
              productId: "Supreme2",
              name: "Supreme 2"
            },
            {
              productId: "Supreme3",
              name: "Supreme 3"
            }
          ]
        }
      ],
      products: []
    };
  },
  created() {
    this.temp = this.database.filter(categ => categ.subCateg == this.sneaker);
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