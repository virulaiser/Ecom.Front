import { NavLink } from "react-router-dom";
import { useCallback, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import useAxios from "../../hook/useAxios";
import Modal from "react-bootstrap/Modal";
import "./ModalLogin.css";
import "./ModalLoginRegister.css";

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
  const [profile, setProfile] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setProfile((prevFormData) => ({ ...prevFormData, [name]: value }));
  }, []);

  const { datas } = useAxios(
    `${import.meta.env.VITE_API_URL}/users/`,
    "post",
    {
      firstname: profile.firstname,
      lastname: profile.lastname,
      email: profile.email,
      password: profile.password,
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

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
                src={`${
                  import.meta.env.VITE_URL_SUPABASE
                }/storage/v1/object/public/resources/doppios-main-logo.png`}
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
                    name="firstname"
                    aria-describedby="firstname"
                    value={profile.firstname}
                    onChange={handleChange}
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
                    value={profile.lastname}
                    onChange={handleChange}
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
                    value={profile.email}
                    onChange={handleChange}
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
                    value={profile.password}
                    onChange={handleChange}
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
