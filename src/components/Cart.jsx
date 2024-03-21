import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
var allproducts = [];
export default function Cart() {
  const { productcartId } = useParams();
  // const [cartdata,setcartdata] = useState();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productcartId}`)
      .then((data) => {
        // console.log(data.data);
        allproducts.push(data.data);
        allproducts.splice(1);
        console.log(allproducts);
        if(localStorage.getItem("cartproduct")) {
          allproducts = JSON.parse(localStorage.getItem("cartproduct"));
      }
      });
    localStorage.setItem('cartproduct',JSON.stringify(allproducts));
  });
}
