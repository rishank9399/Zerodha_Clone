import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg border-bottom" style={{backgroundColor: "white", position: "sticky", top: "0"}}>
      <div class="container p-2 ">
        <Link class="navbar-brand" to="/" >
          <img src="media/images/logo.svg" style={{width: "20%"}} alt="logo image" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-5">
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/about">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/products">
                Products
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" aria-current="page" to="/support">
                Support
              </Link>
            </li>
            {/* <li class="nav-item dropdown">
              <a
                class="nav-link "
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa-solid fa-bars"></i>
              </a>
              <ul class="dropdown-menu text-center">
                <li>
                  <a class="dropdown-item" href="#">
                    <img src="media/images/kite-logo.svg" />
                    <h1 className="fs-6">Kite</h1>
                    <p>Trading platform</p>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src="media/images/console.svg" />
                    <h1 className="fs-6">console</h1>
                    <p>Backoffice</p>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src="media/images/kite-connect.svg" />
                    <h1 className="fs-6">Kite Connect</h1>
                    <p>Trading APIs</p>
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <img src="media/images/coin.svg" />
                    <h1 className="fs-6">coin</h1>
                    <p>Mutual funds</p>
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
          </ul>
          <form class="d-flex" role="search">
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
