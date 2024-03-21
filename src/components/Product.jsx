import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link,  useParams } from "react-router-dom";

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setimages] = useState([]);
  // const Navigate =useNavigate();
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setimages(response.data.images);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]); // Ensure the effect runs when productId changes

  return (
    <div className="container my-3">
      <div className="row">
        {product && (
          <>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={product.thumbnail}
                    className="img-fluid rounded-1 h-100 w-100 shadow-2"
                    alt={product.brand}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <h5 className="fw-bold">{product.price} $</h5>
                    <h6 className="fw-semibold text-secondary">
                      discount {product.discountPercentage} %
                    </h6>
                    <p>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: "#000000" }}
                      />{" "}
                      {product.rating}
                    </p>
                    <p className="card-text">
                      <div className="d-flex justify-content-center align-items-center">
                        <Link
                          className="btn btn-dark w-100 fw-bold"
                          to={`/cart/${product.id}`}
                        >
                          Add to Cart {"  "}{" "}
                          <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {images.map((image) => {
          return (
            <>
              <div className="col-md-4 my-4">
                <img src={image} className="w-100 h-100 rounded-2 "></img>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
