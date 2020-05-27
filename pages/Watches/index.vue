<template>
  <div class="product-list container card-body">
    <h1>Choose a Sub-Categorie :</h1>
    <div class="row">
      <ul class="col" v-for="categ in categ1" :key="categ.watchesId">
        <div class="card shadow-sm p-3 mb-5 bg-light rounded">
          <nuxt-link class="text-dark" :to="`/Watches/${categ.watchesId}`">{{categ.name}}</nuxt-link>
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
          watchesId: "Rolex",
          name: "Rolex"
        },
        {
          watchesId: "Garmin",
          name: "Garmin"
        },
        {
          watchesId: "G-Shock",
          name: "G-Shock"
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