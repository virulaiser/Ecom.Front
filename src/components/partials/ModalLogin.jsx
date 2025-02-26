import { useDispatch } from "react-redux";
import { login } from "../../redux/userSlice";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import Modal from "react-bootstrap/Modal";
import ModalResetPass from "../admin/ModalResetPass";
import axios from "axios";
import "./ModalLogin.css";
import "./ModalLoginRegister.css";

function ModalLogin({
  fullscreen,
  show,
  handleClose,
  handleShowAll,
  setShowRegister,
  setFullscreenRegister,
  setShowLogin,
  setFullscreenLogin,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/tokens`,
      data: { password, email },
    });
    if (response.data.token) {
      dispatch(login(response.data));
      handleClose();
    } else {
      console.log(response.data);
    }
  };

  return (
    <>
      <Modal show={show} fullscreen={fullscreen} onHide={() => handleClose()}>
        <span
          className="position-absolute top-0 end-0 text-white pt-4 pe-4 fw-bold fs-4 z-1"
          onClick={() => handleClose()}
        >
          <AiOutlineClose className="close-btn" />{" "}
        </span>
        <Modal.Body className="modal-bg">
          <div className="login-container">
            <div className="login-img-container">
              <img
                src={`${
                  import.meta.env.VITE_URL_SUPABASE
                }/storage/v1/object/public/resources/doppios-main-logo.png`}
                alt="mainLogo"
                className="login-img"
              />
            </div>
            <div className="login-form-container">
              <h4 className="login-title">Welcome to Doppios.</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control input-form"
                    id="email"
                    aria-describedby="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control input-form"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="form-text login-text">
                    Forgot your password? Click here!
                    <ModalResetPass mail={email} />
                  </div>
                </div>

                <button type="submit" className="main-btn">
                  Login
                </button>

                <div className="col d-flex align-items-start">
                  <p className="form-text">
                    Don't have an account?{" "}
                    <NavLink
                      onClick={() =>
                        handleShowAll(
                          setShowRegister,
                          setFullscreenRegister,
                          setShowLogin,
                          setFullscreenLogin
                        )
                      }
                      className="login-link"
                    >
                      Register here!
                    </NavLink>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalLogin;
