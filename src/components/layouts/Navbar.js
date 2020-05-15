import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <Link className="navbar-brand" href="#">
        Online Bakery Shop
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <Link className="nav-link text-black text uppercase" to="/home">
              Home&nbsp;<i class="fas fa-home"></i>{" "}
              <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black text uppercase" to="/products">
              Products&nbsp;<i class="fas fa-bread-slice"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black text uppercase" to="/about">
              About
            </Link>
          </li>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Pages
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" href="#">
                Gallery
              </Link>
              <Link className="dropdown-item" href="#">
                Blog
              </Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" href="#">
                Tutorials
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Receipts(Soon)
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black text uppercase" to="/Login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black text uppercase" to="/Signup">
              Sign Up
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
