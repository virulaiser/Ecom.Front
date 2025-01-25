import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import ModalRegister from "./components/partials/ModalRegister";
import ModalLogin from "./components/partials/ModalLogin";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header";
import Products from "./components/pages/Products";
import About from "./components/pages/About";
import Product from "./components/pages/Product";
import { useEffect } from "react";
import CartCheckout from "./components/pages/CartCheckout";
import Profile from "./components/pages/Profile";
import Error from "./components/pages/Error";
import OrderConfirmed from "./components/pages/OrderConfirmation";
import BackToTop from "./components/partials/BackToTop";
import ProjectBtn from "./components/partials/ProjectBtn";
import MainNavbar from "./components/partials/MainNavbar";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<ModalRegister />} />
        <Route path="/login" element={<ModalLogin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<Product />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/checkout" element={<CartCheckout />} />
        <Route path="/checkout/confirmed" element={<OrderConfirmed />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <BackToTop />
      <ProjectBtn />
    </>
  );
}

export default App;
