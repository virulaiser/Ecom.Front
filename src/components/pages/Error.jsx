import { NavLink } from "react-router-dom";
import "./Error.css";

function Error() {
  return (
    <div className="vh-100">
      <div className="error-container">
        <h3 className="error-title">404 - Page Not Found</h3>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 className="error-404">404</h4>
        <span className="line-span"></span>
        <h5 className="text-contact mb-4">PAGE YOU ARE LOOKING IS NOT FOUND</h5>
        <p className="mb-5">
          The page you are looking for does not exist. It may have been moved,
          or removed altogether. Perhaps you can return back to the site's
          homepage and see if you can find what you are looking for.
        </p>
        <NavLink to="/" className="main-btn">
          HOMEPAGE
        </NavLink>
      </div>
    </div>
  );
}

export default Error;
