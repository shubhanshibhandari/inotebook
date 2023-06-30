import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";

export const Navbar = () => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  },[location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          i-Notebook
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
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className={`nav-link ${location.pathname==="/"? "active":""}`} to="/">
                Home 
              </Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname==="/about"? "active":""}`} to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
        <form className="d-flex">
        <Link class="btn btn-primary mx-1" to="login" tabindex="-1" role="button" aria-disabled="true">Login</Link>
        <Link class="btn btn-primary mx-1" to="signup" tabindex="-1" role="button" aria-disabled="true">Sign-Up</Link>
        </form>
      </nav>
    </div>
  );
};
