import { useDispatch, useSelector } from "react-redux";
/* import axios from "axios"; */
import {  useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./Home.css";
import "./Products.css";
import { addToCart } from "../../redux/cartSlice";
import { addPrice } from "../../redux/orderPriceSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackToTop from "../partials/BackToTop";
import ProjectBtn from "../partials/ProjectBtn";
import ProductCard from "../partials/ProductCard";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import useAxios from "../../hook/useAxios";

function Home() {
  const [products, setProducts] = useState();
  
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { data,loading,error } =  useAxios(`${import.meta.env.VITE_API_URL}/products/filter/top`, "GET", null);

  useEffect (() => {
      data && setProducts(data); 
    }, [data,loading,error]);
 
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
      { loading  && <p>Cargando...</p>}
       {error && <p>Error: {error}</p>}
        <div className="container-fluid p-0 g-0">
          <div className="home-banner"></div>
          <div className="home-gd-overlay"></div>
          <div className="row d-flex justify-content-center m-0 p-0 mb-5 home-title">
            <img
              className="home-logo"
              src={`${
                import.meta.env.VITE_URL_SUPABASE
              }/storage/v1/object/public/resources/doppios-main-logo.png`}
              alt="Doppio's"
            />
            <h3 className="mt-5 pt-5 fw-bold text-center home-slide-down">
              Slide down <BsFillArrowDownCircleFill />
            </h3>
          </div>
          <div className="container-fluid main-container p-0 m-0">
            <h3 className="mb-4 fw-bold text-center p-3 week-picks-banner">
              THIS WEEK'S PICKS
            </h3>
            <div className="container mt-5">
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
          <section
            id="homeAboutSection"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="home-img-container">
              <img
                src={`${
                  import.meta.env.VITE_URL_SUPABASE
                }/storage/v1/object/public/resources/home-about-img.avif`}
                alt="coffee-shop"
                className="img-home"
              />
            </div>
            <div className="home-text-container">
              {" "}
              <h3 className="card-title fw-bold">About Doppio's</h3>
              <span className="line-span align-self-center mb-5"></span>
              <p className="contact-text mb-4 about-text">
                At Doppio's Coffee & Bakery, we blend the rich tradition of
                artisanal coffee crafting with the comforting aroma of freshly
                baked bread to create an inviting haven for coffee enthusiasts
                and pastry lovers alike. Our name, "Doppio," embodies our
                commitment to excellence, as it refers to the Italian term for
                "double." Just as a doppio espresso is a double shot of pure
                espresso, we aim to double your satisfaction with every visit.
              </p>
              <p className="contact-text about-text">
                With a passion for quality and a dedication to delighting your
                senses, our coffee is sourced from the finest beans and expertly
                roasted to perfection, ensuring each sip is a symphony of
                flavor. Complementing our coffee, our bakery boasts an array of
                handcrafted bread, pastries, and confections, baked fresh daily.
                Join us in savoring the simple pleasures of life, one cup and
                one bite at a time. Welcome to Doppio's, where every visit is a
                double delight.
              </p>
              <img
                className="img align-self-center mt-4 mb-0 opacity-75 home-section-logo"
                src={`${
                  import.meta.env.VITE_URL_SUPABASE
                }/storage/v1/object/public/resources/doppios-black-logo.png"`}
                alt="Doppio's logo"
              />
            </div>
          </section>

          <div className="container-fluid d-flex flex-column align-items-center ps-5 pe-5 mb-5 home-separator">
            <h3 className="card-title fw-bold text-center contact-title">
              Our values
            </h3>
            <span className="line-span mb-2"></span>
            <div className="row d-flex align-items-center px-1 px-md-5 mx-1 mx-md-5">
              <div className="col-12 col-md-3 d-flex flex-column align-items-center p-3 home-value">
                <img
                  src="/imgs/coffee-bean-icon-brown.png"
                  alt="label"
                  className="img-fluid mt-3 opacity-75 custom-image"
                />
                <h5 className="text-center mt-3 fw-semibold">Artisanal</h5>
                <p className="text-center fw-light about-text">
                  Indulge in the artisanal excellence of our handcrafted bakery
                  and café, where every creation is a true work of culinary
                  artistry.
                </p>
              </div>
              <div className="col-12 col-md-3 d-flex flex-column align-items-center p-3 home-value">
                <img
                  src="/imgs/coffee-bean-icon-brown.png"
                  alt="label"
                  className="img-fluid mt-3 opacity-75 custom-image"
                />
                <h5 className="text-center mt-3 fw-semibold">
                  Natural products
                </h5>
                <p className="text-center fw-light about-text">
                  Experience the goodness of our all-natural products, carefully
                  crafted with Mother Nature's finest ingredients for a
                  wholesome and delightful culinary journey.
                </p>
              </div>
              <div className="col-12 col-md-3 d-flex flex-column align-items-center p-3 home-value">
                <img
                  src="/imgs/coffee-bean-icon-brown.png"
                  alt="label"
                  className="img-fluid mt-3 opacity-75 custom-image"
                />
                <h5 className="text-center mt-3 fw-semibold">
                  Family business
                </h5>
                <p className="text-center fw-light about-text">
                  For generations, our family business has been the heart of our
                  bakery and boutique café, where each creation carries with it
                  the love and tradition passed down from parents to children.
                </p>
              </div>
              <div className="col-12 col-md-3 d-flex flex-column align-items-center p-3 home-value">
                <img
                  src="/imgs/coffee-bean-icon-brown.png"
                  alt="label"
                  className="img-fluid mt-3 opacity-75 custom-image"
                />
                <h5 className="text-center mt-3 fw-semibold ">Sustainable</h5>
                <p className="text-center fw-light about-text">
                  Committed to a sustainable future, we take pride in crafting
                  our products with eco-friendly practices and ingredients that
                  prioritize the well-being of our planet and your health.
                </p>
              </div>
            </div>
          </div>
          <Carousel>
            <Carousel.Item>
              <Image
                src={`${
                  import.meta.env.VITE_URL_SUPABASE
                }/storage/v1/object/public/resources/home-carousel-1.avif`}
                className="w-100"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={`${
                  import.meta.env.VITE_URL_SUPABASE
                }/storage/v1/object/public/resources/home-carousel-2.avif`}
                className="w-100"
                fluid
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                src={`${
                  import.meta.env.VITE_URL_SUPABASE
                }/storage/v1/object/public/resources/home-carousel-3.avif`}
                className="w-100"
                fluid
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <BackToTop />
        <ProjectBtn />
      </>
    )
  );
}

export default Home;
