import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Css/explore.css";
import { Link } from "react-router-dom";
export default function Explore() {
  const [products, setProducts] = useState([]);
  // const [categories, setCategories] = useState([]);
  const getProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };
  // const getCategories = () => {
  //   axios
  //     .get("https://dummyjson.com/products/categories")
  //     .then((response) => {
  //       setCategories(response.data); // Assuming the response directly contains category data
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching categories:", error);
  //     });
  // };

  // const getProductcategory = (catName) => {
  //   fetch(`$https://dummyjson.com/products/category/${catName}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setProducts(data);
  //     });
  // };
  useEffect(() => {
    getProducts();
    // getCategories();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {/* {categories &&
            categories.map((cat) => (
              <button
                key={cat}
                onClick={() => getProductcategory(cat)}
                className="btn btn-dark m-3 w-25 h-25"
              >
                {cat}
              </button>
            ))} */}

          {products.map((product, index) => {
            return (
              <>
                <div className="col-md-4">
                  <div className="card my-3" key={index}>
                    <img
                      src={product.thumbnail}
                      className="h-100 w-100"
                      alt={product.brand}
                    />
                    <div className="card-body">
                      <h4 className="card-title fw-bold">{product.title}</h4>
                      <p className="card-text">{product.description}</p>
                      <h5 className="mb-2 text-dark fw-semibold">
                        {product.price} $ <br></br>
                        <span className="text-secondary">
                          <del>
                            {" "}
                            {(product.price * product.discountPercentage) /
                              100 +
                              product.price}{" "}
                            $
                          </del>
                        </span>
                      </h5>
                      <div className="d-flex justify-content-center align-items-center">
                        <Link
                          to={`./product/${product.id}`}
                          className="btn btn-dark mx-2 w-75"
                        >
                          More Details
                        </Link>
                        <Link to={`/cart/${product.id}`} className="btn btn-outline-dark btn-sm">
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
