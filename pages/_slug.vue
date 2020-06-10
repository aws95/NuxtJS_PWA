<template>
  <div class="product container card-body">
    <h1>Product : {{product.product}}</h1>
    <h5>Product ID : {{product._id}}</h5>
    <h5>Product Category : {{product.category}}</h5>
    <h5>Product SubCategory : {{product.subcategory}}</h5>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      product: []
    };
  },
  async asyncData({ params, payload }) {
    if (payload) {
      return {
        product: payload
      };
    } else {
      return await axios
        .get(`http://localhost:8080/products/${params.id}`)
        .then(res => {
          return {
            product: res.data
          };
        });
    }
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