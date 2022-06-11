import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function handleSectionClikc() {
    window.scrollTo(0, 942);
  }

  return (
    <div className="header" data-overlay-dark="8">
      <nav className="navbar navbar-expand-lg mt-5">
        <div className="container-fluid brand">
          <a href="#" className="navbar-brand my-brand">
            pizzazilla
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-5 mx-5">
                <Link
                  onClick={handleSectionClikc}
                  to={"/"}
                  className="nav-link"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li onClick={handleSectionClikc} className="nav-item px-5 mx-5">
                <Link to={"/about"} className="nav-link" href="#">
                  About Us
                </Link>
              </li>
              <li onClick={handleSectionClikc} className="nav-item px-5 mx-5">
                <Link to={"/menu"} className="nav-link" href="#">
                  Menu
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="header-content text-center">
        <div>
          <h4>Welcome to</h4>
          <h1>PizzaZilla Resturant</h1>
          <p>
            Tasty, delicious food ready in restaurant. We respect your test
            review.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
