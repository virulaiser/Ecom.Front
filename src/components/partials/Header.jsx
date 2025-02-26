import { NavLink } from "react-router-dom";
import { Button, Nav, Navbar} from "react-bootstrap";
import { useEffect, useState } from "react";
import { BsCartFill, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import NavbarToggle from "./NavbarToggle";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import ModalCart from "./ModalCart";
import "./Header.css";

function Header() {
  const user = useSelector((state) => state.user);
  const [fullscreenRegister, setFullscreenRegister] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [fullscreenLogin, setFullscreenLogin] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scroll, setScroll] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);

  //Handle for register and login
  const handleShowAll = (
    handleShow,
    handleShowScreen,
    handleClose,
    handleCloseScreen
  ) => {
    handleShow(true);
    handleShowScreen(true);
    handleClose(false);
    handleCloseScreen(false);
  };
  const handleCloseAll = () => {
    setFullscreenRegister(false);
    setShowRegister(false);
    setFullscreenLogin(false);
    setShowLogin(false);
  };

  //Handle for cart
  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleCloseCart = () => {
    setShowCart(false);
  };
  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${scroll ? "nav-scroll" : "nav-top"} navbar-custom`}
        fixed="top"
      >
        <div>
          <Navbar.Brand href="/">
            <img
              src={`${
                import.meta.env.VITE_URL_SUPABASE
              }/storage/v1/object/public/resources/doppios-white-logo.png`}
              alt="Doppios Logo"
              className="nav-logo"
            />
          </Navbar.Brand>
        </div>
        <div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            children={<NavbarToggle />}
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link" to="/about-us">
                About This Project
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
              <div className="d-flex align-items-center">
                <ModalRegister
                  fullscreen={fullscreenRegister}
                  show={showRegister}
                  handleClose={handleCloseAll}
                  handleShowAll={handleShowAll}
                  setShowLogin={setShowLogin}
                  setFullscreenLogin={setFullscreenLogin}
                  setShowRegister={setShowRegister}
                  setFullscreenRegister={setFullscreenRegister}
                />
                {!user && (
                  <Button
                    variant="light"
                    className="mx-2 mb-2"
                    onClick={() =>
                      handleShowAll(
                        setShowRegister,
                        setFullscreenRegister,
                        setShowLogin,
                        setFullscreenLogin
                      )
                    }
                  >
                    Register
                  </Button>
                )}
                <ModalLogin
                  fullscreen={fullscreenLogin}
                  show={showLogin}
                  handleClose={handleCloseAll}
                  handleShowAll={handleShowAll}
                  setShowRegister={setShowRegister}
                  setFullscreenRegister={setFullscreenRegister}
                  setShowLogin={setShowLogin}
                  setFullscreenLogin={setFullscreenLogin}
                />
                {!user && (
                  <Button
                    variant="outline-light"
                    className="mx-2 mb-2"
                    onClick={() =>
                      handleShowAll(
                        setShowLogin,
                        setFullscreenLogin,
                        setShowRegister,
                        setFullscreenRegister
                      )
                    }
                  >
                    Login
                  </Button>
                )}
                <ModalCart
                  show={showCart}
                  handleClose={handleCloseCart}
                  handleShowAll={handleShowAll}
                  setShowLogin={setShowLogin}
                  setFullscreenLogin={setFullscreenLogin}
                  setShowRegister={setShowRegister}
                  setFullscreenRegister={setFullscreenRegister}
                />
                {user && (
                  <NavLink to={`profile/${user.id}`}>
                    <BsFillPersonFill className="mx-2 mb-2 nav-icon" />
                  </NavLink>
                )}
                <BsCartFill
                  className="mx-2 mb-2 nav-icon"
                  onClick={handleShowCart}
                />
                {user && (
                  <HiOutlineLogout
                    className="mx-2 mb-2 nav-icon"
                    onClick={() => handleLogOut()}
                  />
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
