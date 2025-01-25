import React from "react";
import "./Products.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addPrice } from "../../redux/orderPriceSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCard from "../partials/ProductCard";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

function Products() {
  const [products, setProducts] = useState();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const notify = () => {
    toast.success("Product added!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };
  const [filtered, setFiltered] = useState("All");

  const notifyError = () => {
    toast.error("Sorry, there's no more stock for this product.", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/products/filter/${filtered}`,
        /* headers: {
          Authorization: "Bearer " + (user && user.token),
        }, */
      });
      response && setProducts(response.data);
    };
    getProducts();
  }, [filtered]);

  const handleAddCart = async (product) => {
    const control = cart.find((item) => item._id === product._id);

    if (control && control.quantity < control.stock) {
      dispatch(addToCart(product));
      dispatch(addPrice(product.price));
      notify();
    } else if (!control) {
      dispatch(addToCart(product));
      dispatch(addPrice(product.price));
      notify();
    } else {
      notifyError();
    }
  };

  return (
    products && (
      <>
        <div className="container-fluid main-container p-0">
          <div className="container-fluid d-flex align-items-center flex-column justify-content-center image-container m-0 p-0">
            <h2 className="text-white text-center title">
              PRODUCTS
            </h2>
            <h3 className="mt-5 pt-5 fw-bold text-center slide-down">Slide down <BsFillArrowDownCircleFill /></h3>
          </div>
          <div className="container mt-5">
            <div className="row d-flex justify-content-end pe-2 me-5">
              <h5 className="col text-black fw-semibold text-end">
                Filter by category:
              </h5>
              <select
                className="col-3 form-select-sm mb-5 rounded-0"
                aria-label=".form-select-sm example"
                onChange={(event) => setFiltered(event.target.value)}
              >
                <option className="fw-semibold" value="All">
                  All products
                </option>
                <option value="Cafe">Cafe</option>
                <option value="Bakery">Bakery</option>
                <option value="Cakes">Cakes</option>
                <option value="Coffee beans">Coffee beans</option>
              </select>
            </div>
            <div className="row d-flex justify-content-center flex-wrap m-0 gap-3 pb-5">
              {products.map((product, id) => (
                <ProductCard
                  key={id}
                  product={product}
                  handleAddCart={handleAddCart}
                />
              ))}
              <ToastContainer autoClose={3000} />
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Products;
