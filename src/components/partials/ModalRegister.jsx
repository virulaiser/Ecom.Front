import Modal from "react-bootstrap/Modal";
import "./ModalLoginRegister.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";
import "./ModalLogin.css";

function ModalRegister({
  fullscreen,
  show,
  handleClose,
  handleShowAll,
  setShowLogin,
  setFullscreenLogin,
  setShowRegister,
  setFullscreenRegister,
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("firstname", firstname);
    // formData.append("lastname", lastname);
    // formData.append("email", email);
    // formData.append("password", password);

    await axios({
      method: "post",
      url: `${import.meta.env.VITE_API_URL}/users/`,
      data: { firstname, lastname, email, password },
    });
    handleShowAll(
      setShowLogin,
      setFullscreenLogin,
      setShowRegister,
      setFullscreenRegister
    );
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
          <div className="register-container">
            <div className="register-img-container">
              <img
                src="https://mcbzesritumxqjtbullp.supabase.co/storage/v1/object/public/resources/doppios-main-logo.png"
                alt="mainLogo"
                className="login-img"
              />
            </div>
            <div className="register-form-container">
              <h4 className="login-title">Create an account</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="firstname" className="form-label">
                    Firstname
                  </label>
                  <input
                    type="text"
                    className="form-control input-form"
                    id="firstname"
                    aria-describedby="firstname"
                    value={firstname}
                    onChange={(event) => setFirstname(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastname" className="form-label">
                    Lastname
                  </label>
                  <input
                    className="form-control input-form"
                    type="text"
                    name="lastname"
                    id="lastname"
                    autoComplete="off"
                    value={lastname}
                    onChange={(event) => setLastname(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    className="form-control input-form"
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    className="form-control input-form"
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="main-btn">
                  Register
                </button>
                <div className="col d-flex align-items-start">
                  <p className="mt-3 form-text">
                    Already have an account?{" "}
                    <NavLink
                      onClick={() =>
                        handleShowAll(
                          setShowLogin,
                          setFullscreenLogin,
                          setShowRegister,
                          setFullscreenRegister
                        )
                      }
                      className="login-link"
                    >
                      Sign in!
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

export default ModalRegister;

{
  /* <div className="login-box p-4">
<p>Create an account</p>
<form method="post" onSubmit={handleSubmit}>
  <div className="user-box">
    <input
      type="text"
      name="firstname"
      id="firstname"
      className="form-control"
      autoComplete="off"
      value={firstname}
      onChange={(event) => setFirstname(event.target.value)}
    />
    <label htmlFor="firstname">Firstname</label>
  </div>
  <div className="user-box">
    <input
      type="text"
      name="lastname"
      id="lastname"
      className="form-control"
      autoComplete="off"
      value={lastname}
      onChange={(event) => setLastname(event.target.value)}
    />
    <label htmlFor="lastname">Lastname</label>
  </div>
  <div className="user-box">
    <input
      type="email"
      name="email"
      id="email"
      className="form-control"
      autoComplete="off"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
    />
    <label htmlFor="email">Email</label>
  </div>
  <div className="user-box">
    <input
      type="password"
      name="password"
      id="password"
      className="form-control"
      value={password}
      onChange={(event) => setPassword(event.target.value)}
    />
    <label htmlFor="password">Password</label>
  </div>
  <button className="btn-modal" type="submit">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    Submit
  </button>
</form>
<div className="col d-flex align-items-start">
  <p className="mt-3 text-white">
    Already have an account?{" "}
    <Link
      onClick={() =>
        handleShowAll(
          setShowLogin,
          setFullscreenLogin,
          setShowRegister,
          setFullscreenRegister
        )
      }
      className="a2"
    >
      Sign in!
    </Link>
  </p>
</div>
</div> */
}
