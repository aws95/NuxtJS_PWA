<template>
  <div class="product container card-body">
    <h1>Showing Product ID : {{$route.params.productId}}</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      routes: []
    };
  },
  computed: mapState({
    ...mapState("articles", {
      bikes: state => state.bikes,
      watches: state => state.watches,
      sneakers: state => state.sneakers
    })
  }),
  
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