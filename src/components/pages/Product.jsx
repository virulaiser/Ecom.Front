import { BsCartFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { addPrice } from "../../redux/orderPriceSlice";
import { ToastContainer, toast } from "react-toastify";
import Accordion from "react-bootstrap/Accordion";
import ProductCard from "../partials/ProductCard";
import useAxios from "../../hook/useAxios";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";

function Product() {
  const params = useParams();
  const cart = useSelector((state) => state.cart);
  const slug = params.slug;
  const dispatch = useDispatch();
  const [interestingProduct, setInterestingProduct] = useState([]);
  const [product, setProduct] = useState([]);
  const location = useLocation();

  const notify = () => {
    toast.success("Product added!", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  const notifyError = () => {
    toast.error("Sorry, there's no more stock for this product.", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
  };

  const { data, loading, error } = useAxios(
    `${import.meta.env.VITE_API_URL}/products/${slug}`,
    "GET",
    null
  );

  useEffect(() => {
    data && setProduct(data.product[0]);
    data && setInterestingProduct(data.products);
  }, [data, loading, error, location.pathname]);

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
    product && (
      <>
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
        <div className="container-fluid main-container">
          <div className="container d-flex justify-content-center align-items-center mb-3 data-container">
            <div className="row g-0 mt-5">
              <div className="col-sm-12 col-md-6 border d-flex justify-content-center align-items-center">
                <img
                  src={`${
                    import.meta.env.VITE_URL_SUPABASE
                  }/storage/v1/object/public/products/${
                    product.image
                  }?t=2023-09-19T13%3A20%3A01.474Z`}
                  style={{
                    maxHeight: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="col-sm-12 col-md-6 card-body-details">
                <div className="card-body p-5">
                  <h3 className="text-uppercase fw-bold">{product.name}</h3>
                  <p className="card-text mt-3 fs-2 price-text fst-italic">
                    Price: ${product.price}
                  </p>
                  <p className="card-text about-text">{product.description}</p>
                  <hr className="mt-5" />
                  <p>CATEGORY: {product.category}</p>
                  <p className="text-body-secondary ">STOCK: {product.stock}</p>
                  <hr className="mt-2" />

                  <div
                    className="d-flex justify-content-end mt-5 "
                    onClick={() => handleAddCart(product)}
                  >
                    <button className="d-flex align-items-center px-5 py-3 main-btn">
                      <BsCartFill />
                      <span className="ms-2">ADD TO CART</span>
                    </button>
                  </div>
                  <ToastContainer autoClose={3000} />
                </div>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Ordering and shipping information
                </Accordion.Header>
                <Accordion.Body className="about-text">
                  In our store, customer satisfaction is our priority. Placing
                  an order is easy and convenient. Simply select your favorite
                  products, provide your shipping details and choose your
                  preferred payment method. Our team of expert bakers will
                  prepare with love and care your fresh produce before shipping
                  it safely and on time to your door Trust us to offer you an
                  experience of exceptional purchase, where quality and
                  freshness are what first.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Payment methods</Accordion.Header>
                <Accordion.Body className="about-text">
                  We want your shopping experience to be comfortable and safe.
                  We offer a variety of payment methods to suit your needs. You
                  can pay with credit or debit card. We also accept bank
                  transfers and, if you prefer, You can pay in cash in our
                  physical store at the time of Delivery. Your safety and
                  convenience are essential to us, so you can choose the method
                  that best suits you. suits.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Legal warning</Accordion.Header>
                <Accordion.Body className="about-text">
                  This website is designed to provide information about our
                  products and allow you to make purchases online. Us We strive
                  to maintain the accuracy and timeliness of the information,
                  but we do not guarantee the constant availability of all the
                  products. Additionally, any information provided This site
                  should not be considered legal, medical or advice.
                  professional. By making a purchase, you agree to our terms and
                  conditions, including our privacy policy. Yeah If you have any
                  questions or concerns, do not hesitate to contact us. You
                  satisfaction is our priority.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          <div className="container mt-5">
            {interestingProduct.length > 5 &&
              setInterestingProduct(interestingProduct.slice(0, 5))}
            <div className="row d-flex justify-content-center flex-wrap m-0 gap-3 pb-5">
              {interestingProduct.map((product, id) => (
                <ProductCard
                  key={id}
                  product={product}
                  handleAddCart={handleAddCart}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    )
  );
}

export default Product;
