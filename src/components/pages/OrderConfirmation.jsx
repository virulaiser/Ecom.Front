import { NavLink, useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function OrderConfirmed() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="container-fluid g-0 m-0 p-0">
      <div className=" confirmation-container d-flex justify-content-center">
        <h3 className="fw-bold title">Order confirmed!</h3>
      </div>
      <div className=" col-12 col-md-12 d-flex flex-column justify-content-center align-items-center p-5">
        <img
          className="confirmation-logo"
          src={`${
            import.meta.env.VITE_URL_SUPABASE
          }/storage/v1/object/public/resources/doppios-black-logo.png`}
          alt="Doppio's logo"
        />
        <h3 className="fw-semibold">Thank you for buying at Doppio's!</h3>
        <span className="line-span mb-4"></span>
        <NavLink to="/products" className="mb-5 main-btn">
          Continue buying
        </NavLink>
      </div>
    </div>
  );
}

export default OrderConfirmed;
