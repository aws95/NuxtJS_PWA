<template>
  <div class="product container card-body">
    <h1>Showing Product ID : {{$route.params.productId}}</h1>
  </div>
</template>

<script>
export default {
  /* validate({ params, redirect, store }) {
   
    if (this.database.filter(data => data.path == params.productId)) {
      return true;
    } else {
      return redirect("/404");
    }
    
  }*/
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