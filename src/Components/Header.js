import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetAllSolutions from "../APIS/GetAllSolutions";

const Header = () => {
  return (
    <div>
      <header className="border-bottom">
        <div className="navbar d-flax align-item-center justify-between paddind10">
          <div className="logo">
            <Link to="/">
              <img src="/images/acme-logo.jpg" alt="Acme Logo" />
            </Link>
          </div>
          <div className="hamburger-menu">
            <input
              id="menu__toggle"
              class="btn-primary"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
              type="checkbox"
            />
            <label className="menu__btn" htmlFor="menu__toggle">
              <span />
            </label>

            <div
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              tabindex="-1"
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div class="offcanvas-body menu__box">
                <ul className="menu__box ">
                  <li>
                    <Link className="menu__item" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="menu__item"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasWithBothOptions"
                      aria-controls="offcanvasWithBothOptions"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>

                  <ul
                    className="scroll-shadows p-0"
                    style={{ listStyle: "none" }}
                  >
                    {GetAllSolutions().map((item) => {
                      return (
                        <li>
                          <Link
                            // onClick={() =>
                            //   (window.location.href = `/la/${item.id}`)
                            // }
                            className="menu__item"
                            to={`/la/${item.id}`}
                          >
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <li>
                    <Link className="menu__item" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link className="menu__item" to="/contact">
                      Apply for Job
                    </Link>
                  </li>
                  <li className="social-icons text-center">
                    <Link to="https://www.facebook.com/">
                      <i className="bi bi-facebook" />
                    </Link>
                    <Link to="https://www.twitter.com/">
                      <i className="bi bi-twitter" />
                    </Link>
                    <Link to="https://www.instagram.com/">
                      <i className="bi bi-instagram" />
                    </Link>
                    <Link to="https://www.youtube.com/">
                      <i className="bi bi-youtube" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
