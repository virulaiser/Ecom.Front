import Offcanvas from "react-bootstrap/Offcanvas";
import {
  BsFillPlusCircleFill,
  BsFillDashCircleFill,
  BsTrash3Fill,
} from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
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
import { NavLink } from "react-router-dom";
import "./ModalCart.css";

function ModalCart({
  show,
  handleClose,
  handleShowAll,
  setShowLogin,
  setFullscreenLogin,
  setShowRegister,
  setFullscreenRegister,
}) {
  const user = useSelector((state) => state.user);
  const orderPrice = useSelector((state) => state.orderPrice);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <div className="offcanvas-title h5"> Shopping Cart</div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cart.length > 0 &&
            cart.map((product, id) => (
              <div key={id} className="row">
                <div className="row mb-2 d-flex justify-content-between align-items-center m-0 p-0">
                  <div className="col-5">
                    <h6 className="fw-semibold text-dark m-0 cart-product-substring">
                      {product.name}
                    </h6>
                    <p className="text-secondary m-0 p-0">{product.category}</p>
                  </div>
                  <div className="col-7 d-flex justify-content-between">
                    <div className="d-flex align-items-center m-0 p-0">
                      <BsFillDashCircleFill
                        className="btn m-0 p-0"
                        onClick={() => handleRemoveFromCart(product)}
                      />
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
                    <div className="d-flex align-items-center m-0 p-0">
                      <h6 className="text-black m-0 p-0 me-2">
                        $ {product.totalPrice.toFixed(2)}
                      </h6>
                      <BsTrash3Fill
                        className="btn fs-5 m-0 p-0"
                        onClick={() => handleRemoveProduct(product)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </Offcanvas.Body>
        <div className="border-top cart-footer">
          <div className="d-flex justify-content-between px-3 mt-3">
            <p className="fw-bold">Order total</p>
            <p className="fw-bold">
              US$ {orderPrice < 0 ? "0.00" : orderPrice.toFixed(2)}
            </p>
          </div>
          <div className="d-flex justify-content-between px-3">
            <p className="fw-bold">Shipping</p>
            <p className="fw-bold">Free</p>
          </div>
          <div className="p-3 d-flex">
            {user ? (
              <NavLink
                className="main-btn text-center w-100"
                aria-label="Check Out"
                to="/checkout"
                onClick={handleClose}
              >
                Check Out
              </NavLink>
            ) : (
              <button
                className="main-btn  text-center w-100"
                onClick={() =>
                  handleShowAll(
                    setShowLogin,
                    setFullscreenLogin,
                    setShowRegister,
                    setFullscreenRegister
                  )
                }
              >
                Check Out
              </button>
            )}
          </div>
        </div>
      </Offcanvas>
    </>
  );
}

export default ModalCart;
