import { Link, NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { BsCartFill, BsFillPersonFill } from "react-icons/bs";
import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import ModalRegister from "./ModalRegister";
import ModalLogin from "./ModalLogin";
import ModalCart from "./ModalCart";
import "./Header.css";
import "./MainNavbar.css";

function MainNavbar() {
  const user = useSelector((state) => state.user);
  const [fullscreenRegister, setFullscreenRegister] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [fullscreenLogin, setFullscreenLogin] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [scrollData, setScrollData] = useState({ y: 0, lastY: 0 });
  const [showNav, setShowNav] = useState(true);
  const [mobile, setMobile] = useState(false);
  
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setScrollData((prevState) => {
        return {
          y: window.scrollY,
          lastY: prevState.y,
        };
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (scrollData.y > 1000) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    if (scrollData.lastY >= scrollData.y) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    if (scrollData.y === 0) {
      setShowNav(true);
    }
  }, [scrollData, showNav]);

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

  const handleWidth = () => {
    if (window.screen.width > 768) setMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  return (
    <nav className={showNav ? "nav-bar" : "hide-nav"}>
      <div className="nav-logo-container">
        <Link to={"/"}>
          <img
            src={`${
              import.meta.env.VITE_URL_SUPABASE
            }/storage/v1/object/public/resources/doppios-white-logo.png`}
            alt="Doppios Logo"
            className="nav-logo"
          />
        </Link>
      </div>
      <div>
        <ul
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <NavLink className="nav-link" aria-current="page" to="/">
            <li>Home</li>
          </NavLink>
          <NavLink className="nav-link" to="/about-us">
            <li>About This Project</li>
          </NavLink>
          <NavLink className="nav-link" to="/products">
            <li>Products</li>
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            <li>Contact</li>
          </NavLink>
          <div className="nav-auth-btn">
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
                className="auth-btn"
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
                className="auth-btn"
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
                <BsFillPersonFill className="nav-icon" />
              </NavLink>
            )}
            <BsCartFill className="nav-icon" onClick={handleShowCart} />
            {user && (
              <HiOutlineLogout
                className="nav-icon"
                onClick={() => handleLogOut()}
              />
            )}
          </div>
        </ul>
      </div>
      <button
        className="nav-btn mobile-menu-icon"
        onClick={() => setMobile(!mobile)}
      >
        {mobile ? <RxCross1 /> : <FaBars />}
      </button>
    </nav>
  );
}

export default MainNavbar;
