import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";

function Footer() {
  return (
    <>
      <footer className="row m-0 p-0">
        <div className="footer-container">
          <div className="col-12 col-md-4 section-container">
            <h4 className="text-white footer-title mb-5">Opening hours</h4>
            <div>
              <ul className="days-container">
                <li>
                  <span className="text-span">Monday</span>
                  <span className="span-line"></span>
                  <span className="text-span text-closed">Closed</span>
                </li>
                <li>
                  <span className="text-span">Tuesday</span>
                  <span className="span-line"></span>
                  <span className="text-span text-hours">9:00 - 22:00</span>
                </li>
                <li>
                  <span className="text-span">Wednesday</span>
                  <span className="span-line"></span>
                  <span className="text-span text-hours">9:00 - 22:00</span>
                </li>
                <li>
                  <span className="text-span">Thursday</span>
                  <span className="span-line"></span>
                  <span className="text-span text-hours">9:00 - 22:00</span>
                </li>
                <li>
                  <span className="text-span">Friday</span>
                  <span className="span-line"></span>
                  <span className="text-span text-hours">9:00 - 1:00</span>
                </li>
                <li>
                  <span className="text-span">Saturday</span>
                  <span className="span-line"></span>
                  <span className="text-span text-hours">12:00 - 1:00</span>
                </li>
                <li>
                  <span className="text-span">Sunday</span>
                  <span className="span-line"></span>
                  <span className="text-span text-hours">9:00 - 22:00</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4 section-container">
            <h4 className="text-white footer-title mb-5">Contact us</h4>
            <div className="footer-contact">
              <ul>
                <li className="text-closed">contact@doppios.com</li>
                <li className="text-hours">099 999 999</li>
                <li className="text-hours">18 de Julio 2076,</li>
                <li className="text-hours">Montevideo</li>
              </ul>
              <div className="newsletter-container">
                <h4 className="footer-title text-white mt-5">
                  Suscribe to our newsletter!
                </h4>
                <form className="newsletter-form">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Your email"
                  />
                  <button type="submit" className="newsletter-btn">
                    <BiSolidRightArrow className="newsletter-icon" />
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 section-container">
            <h4 className="text-white footer-title mb-5">Other locations</h4>
            <div>
              <h5 className="text-white location-title">
                Doppios. coffee shop
              </h5>
              <p className="text-hours mt-3">Requena 2054, Montevideo</p>
            </div>
            <div className="mt-5">
              <h5 className="text-white location-title">Doppios. cafe</h5>
              <p className="text-hours mt-3">Av Brasil 4321, Montevideo</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-socials">
        <p className="m-0 text-white">© 2023 Doppios. All Rights Reserved</p>
        <div className="d-flex justify-content-between icons-container">
          <NavLink
            to="https://www.facebook.com/"
            target="blank"
            className=" footerLink text-white"
          >
            <FaFacebook className="footer-icons" />
          </NavLink>
          <NavLink
            to="https://www.instagram.com/"
            target="blank"
            className=" footerLink text-white"
          >
            <FaInstagram className="footer-icons" />
          </NavLink>
          <NavLink
            to="https://twitter.com/"
            target="blank"
            className=" footerLink text-white"
          >
            <FaXTwitter className="footer-icons" />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/"
            target="blank"
            className="
            footerLink text-white"
          >
            <FaLinkedin className="footer-icons" />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/"
            target="blank"
            className="
            footerLink text-white"
          >
            <FaGithub className="footer-icons" />
          </NavLink>
        </div>
        <div>
          <ul className="d-flex align-items-center justify-content-center m-0 footer-list">
            <li>Terms of use</li>
            <li>Terms of sale</li>
            <li>Doppios. Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;

{
  /* <footer className="d-flex justify-content-between align-items-center  text-white">
<div className="">
  <img
    src="imgs/doppios-white-logo.png"
    alt="Doppios Logo"
    className="nav-logo"
  />
</div>
<div className="nav text-white">
  <NavLink to="/" className="footerLink nav-link">
    HOME
  </NavLink>
  <NavLink to="/products" className="footerLink nav-link">
    PRODUCTS
  </NavLink>
  <NavLink to="/about-us " className="footerLink nav-link">
    ABOUT THIS PROJECT
  </NavLink>
  <NavLink to="/contact" className="footerLink nav-link">
    CONTACT
  </NavLink>
</div>
<div className="d-flex justify-content-between gap-2">
  <h6 className="footerLink nav-link text-white align-self-center mb-1">
    SOCIAL :
  </h6>
  <a
    href="https://www.facebook.com/"
    target="blank"
    className=" footerLink text-white mb-2 a-icons"
  >
    <FaFacebook />
  </a>
  <a
    href="https://www.instagram.com/"
    target="blank"
    className=" footerLink text-white a-icons"
  >
    <FaInstagram />
  </a>
  <a
    href="https://twitter.com/"
    target="blank"
    className=" footerLink text-white a-icons"
  >
    <FaTwitter />
  </a>
  <a
    href="https://www.linkedin.com/"
    target="blank"
    className=" footerLink text-white a-icons"
  >
    <FaLinkedin />
  </a>
</div>
</footer> */
}
