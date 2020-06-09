export default function({ store, redirect, route }) {
  let bikes = store.getters["articles/getBikes"];
  let watches = store.getters["articles/getWatches"];
  let sneakers = store.getters["articles/getSneakers"];
  let temp = [...bikes, ...watches, ...sneakers].map(elt => elt.value);
  let products = temp.reduce((a, b) => a.concat(b), []);
  let checker = products.filter(
    elt => elt.productId === route.params.productId
  );
  if (checker.length !== 0) {
    return true;
  } else {
    return redirect("/404");
  }
}
