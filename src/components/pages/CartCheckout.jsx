import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { resetCart } from "../../redux/cartSlice";
import { resetPrice } from "../../redux/orderPriceSlice";
import {
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
  BsTrash3Fill,
} from "react-icons/bs";
import {
  addToCart,
  removeFromCart,
  removeProductFromCart,
} from "../../redux/cartSlice";
import {
  addPrice,
  removePrice,
  removeTotalPrice,
} from "../../redux/orderPriceSlice";
import "./CartCheckout.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxios from "../../hook/useAxios";

function CartCheckout() {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const orderPrice = useSelector((state) => state.orderPrice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  //***si no hay Id no hay compra */
 /*  const handleClick = async () => {
    const orderId = uuidv4();
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/orders/`,
      data: { cart, orderPrice, orderId },
      headers: {
        Authorization: "Bearer " + (user && user.token),
      },
    });
    console.log ("autorization =>","Bearer " + (user && user.token));
    dispatch(resetCart());
    dispatch(resetPrice());
    navigate("/checkout/confirmed");
  }; */


  const orderId = uuidv4();
 const {data} =useAxios(`${import.meta.env.VITE_API_URL}/orders/`, "POST", { cart, orderPrice, orderId },(user && user.token)
    );

  const handleClick = async () => {
     console.log(data && data.id);
     console.log("Token recibido:", data?.token);
    dispatch(resetCart());
    dispatch(resetPrice());
    navigate("/checkout/confirmed");
   
   }; 






  const handleAddCart = async (product) => {
    dispatch(addToCart(product));
    dispatch(addPrice(product.price));
  };

  const handleRemoveFromCart = async (product) => {
    dispatch(removeFromCart(product));
    dispatch(removePrice(product.price));
  };

  const handleRemoveProduct = async (product) => {
    dispatch(removeProductFromCart(product));
    dispatch(removeTotalPrice(product.totalPrice));
  };

  const notify = () => {
    toast.error("Your cart is empty", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  return (
    <>
      <div className="checkout-container pb-5">
        <div className="checkout-bg-img container-fluid d-flex justify-content-center align-items-center">
          <div className="checkout-gd-overlay d-flex justify-content-center align-items-center "> </div>
          <h2 className="mb-3 title">
            CHECKOUT
          </h2>
        </div>
        <div className="container p-5">
          <div className="row d-flex justify-content-center mt-4 gap-3">
            <div className="col-12 col-md-6 card p-3">
              <div className="table resposive">
              <table className="table align-middle horizontal-align-middle">
                <thead>
                  <tr>
                    <th scope="col-6">Product</th>
                    <th scope="col-3">Quantity</th>
                    <th scope="col-3">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, id) => (
                    <tr key={id}>
                      <td scope="row">
                        <img
                          className="me-4 checkout-table-img"
                          src={`${import.meta.env.VITE_URL_SUPABASE}/storage/v1/object/public/products/${product.image}?t=2023-09-19T13%3A20%3A01.474Z`}
                          alt={product.name}
                        />
                         {product.name.substring(0, 15)}...
                     
                      </td>
                      <td>
                        <div className="d-flex align-items-center m-0 p-0">
                          {product.quantity > 1 ? (
                            <BsFillDashCircleFill
                              className="btn m-0 p-0"
                              onClick={() => handleRemoveFromCart(product)}
                            />
                          ) : (
                            <BsFillDashCircleFill
                              className="btn text-secondary m-0 p-0"
                              disabled
                            />
                          )}
                          <p className="fw-normal text-black fs-5 m-0 mx-2 p-0">
                            {product.quantity}
                          </p>
                          {product.stock > product.quantity ? (
                            <BsFillPlusCircleFill
                              className="btn m-0 p-0"
                              onClick={() => handleAddCart(product)}
                            />
                          ) : (
                            <BsFillPlusCircleFill
                              className="btn text-secondary m-0 p-0"
                              disabled
                            />
                          )}
                        </div>
                      </td>
                      <td>$ {product.totalPrice.toFixed(2)}</td>
                      <td>
                        <BsTrash3Fill
                          className="btn fs-5 m-0 p-0"
                          onClick={() => handleRemoveProduct(product)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
            </div>
            <div className="col-12 col-md-5 card p-3 checkout-summary">
              <div className="card-body">
                <h5 className="card-title mb-4">Order summary</h5>
                <ul className="me-4">
                  <li className="d-flex justify-content-between">
                    <span className="fst-italic">Products </span>
                    <span>
                      $ {orderPrice < 0 ? "0.00" : orderPrice.toFixed(2)}
                    </span>
                  </li>

                  <li className="d-flex justify-content-between">
                    <span className="fst-italic">Shipping </span>
                    <span>$ 0.00</span>
                  </li>
                  <li className="d-flex justify-content-between mt-2">
                    <span className="fw-semibold">Total </span>
                    <span>
                      $ {orderPrice < 0 ? "0.00" : orderPrice.toFixed(2)}
                    </span>
                  </li>
                </ul>
                <div className="row px-3 pt-4 pb-2">
                  {cart.length >= 1 ? (
                    <button
                      className="btn btn-none text-center rounded-0 px-2 py-2 main-btn"
                      onClick={handleClick}
                    >
                      Complete order
                    </button>
                  ) : (
                    <button
                      className="btn btn-none text-center rounded-0 px-2 py-2 main-btn"
                      onClick={notify}
                    >
                      Complete order
                    </button>
                  )}
                </div>
                <ToastContainer autoClose={3000} />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default CartCheckout;
