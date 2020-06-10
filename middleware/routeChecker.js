import axios from "axios";
export default function({ redirect, route }) {
  return axios.get("http://localhost:8080/products").then(res => {
    let checker = res.data.filter(elt => elt._id === route.params.id);
    if (checker.length !== 0) {
      return true;
    } else {
      return redirect("/404");
    }
  });
}
