import axios from "axios";
export default function({ redirect, route }) {
  return axios.get("http://localhost:8880/products").then(res => {
    let checker = res.data.filter(elt => elt.slug === route.params.slug);
    console.log(checker)
    if (checker.length !== 0) {
      return true;
    } else {
      return redirect("/404");
    }
  });
}
