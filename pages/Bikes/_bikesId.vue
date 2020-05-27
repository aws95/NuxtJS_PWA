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
    this.bike = this.$route.params.bikesId;
    return {
       database: [
        {
          subCateg: "Giant",
          value: [
            {
              productId: "Giant1",
              name: "Giant 1"
            },
            {
              productId: "Giant2",
              name: "Giant 2"
            },
            {
              productId: "Giant3",
              name: "Giant 3"
            }
          ]
        },
        {
          subCateg: "Trek",
          value: [
            {
              productId: "Trek1",
              name: "Trek 1"
            },
            {
              productId: "Trek2",
              name: "Trek 2"
            },
            {
              productId: "Trek3",
              name: "Trek 3"
            }
          ]
        },
        {
          subCateg: "Scott",
          value: [
            {
              productId: "Scott1",
              name: "Scott 1"
            },
            {
              productId: "Scott2",
              name: "Scott 2"
            },
            {
              productId: "Scott3",
              name: "Scott 3"
            }
          ]
        }
      ],
      products: []
    };
  },
  created() {
    this.temp = this.database.filter(categ => categ.subCateg == this.bike);
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