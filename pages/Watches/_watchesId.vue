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
    this.watch = this.$route.params.watchesId;
    return {
      database: [
        {
          subCateg: "Rolex",
          value: [
            {
              productId: "Rolex1",
              name: "Rolex 1"
            },
            {
              productId: "Rolex2",
              name: "Rolex 2"
            },
            {
              productId: "Rolex3",
              name: "Rolex 3"
            }
          ]
        },
        {
          subCateg: "Garmin",
          value: [
            {
              productId: "Garmin1",
              name: "Garmin 1"
            },
            {
              productId: "Garmin2",
              name: "Garmin 2"
            },
            {
              productId: "Garmin3",
              name: "Garmin 3"
            }
          ]
        },
        {
          subCateg: "G-Shock",
          value: [
            {
              productId: "G-Shock1",
              name: "G-Shock 1"
            },
            {
              productId: "G-Shock2",
              name: "G-Shock 2"
            },
            {
              productId: "G-Shock3",
              name: "G-Shock 3"
            }
          ]
        }
      ],
      products: []
    };
  },
  created() {
    this.temp = this.database.filter(categ => categ.subCateg == this.watch);
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