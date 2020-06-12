export default function({ redirect, route, store }) {
  let products = store.state;
  let checker = products["products"].filter(
    elt => elt.slug === route.params.slug
  );
  if (checker.length !== 0) {
    return true;
  } else {
    return redirect("/404");
  }
}
