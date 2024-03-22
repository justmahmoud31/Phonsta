import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

export default function Cart() {
  const { productcartId } = useParams();
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productcartId}`)
      .then((response) => {
        const data = response.data;
        // Clear the existing products and add the new one
        setAllProducts([data]);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productcartId]); // Adding productcartId as a dependency to the effect
  
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(allProducts));
    console.log(allProducts);
    swal({
      title: "Added Successfuly",
        icon: "success",
     });
  }, [allProducts]); // Adding allProducts as a dependency to the effect

  return (
    <div className="container">
      <div className="row">
        {allProducts.map((product, index) => (
          <div className="col-md-4" key={index}>
            <div className="card my-3">
              <img
                src={product.thumbnail}
                className=" h-100 w-100"
                alt={product.brand}
              />
              <div className="card-body">
                <h4 className="card-title fw-bold">{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <h5 className="mb-2 text-dark fw-semibold">
                  {product.price} $ <br></br>
                  <span className="text-secondary">
                    <del>
                      {(product.price * product.discountPercentage) / 100 +
                        product.price}{" "}
                      $
                    </del>
                  </span>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
