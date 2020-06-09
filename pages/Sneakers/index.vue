<template>
  <div class="product-list container card-body">
    <h1>Choose a Brand :</h1>
    <div class="row">
      <ul class="col" v-for="categ in categ1" :key="categ.sneakersId">
        <div class="card shadow-sm p-3 mb-5 bg-light rounded">
          <nuxt-link rel="preload" class="text-dark" :to="`/Sneakers/${categ.sneakersId}`">{{categ.name}}</nuxt-link>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categ1: [
        {
          sneakersId: "Jordans",
          name: "Jordans"
        },
        {
          sneakersId: "Vans",
          name: "Vans"
        },
        {
          sneakersId: "Supreme",
          name: "Supreme"
        }
      ]
    };
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