import React from "react";

const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary p-3 mb-5"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-danger">NEWS</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div
                className="nav-link  btn btn-secondary "
                aria-current="page"
                onClick={() => setCategory("science")}
              >
                Science
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link btn btn-secondary"
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link btn btn-secondary"
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link btn btn-secondary"
                onClick={() => setCategory("business")}
              >
                Business
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link btn btn-secondary"
                onClick={() => setCategory("health")}
              >
                Health
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
