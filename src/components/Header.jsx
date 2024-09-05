import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleHalfStroke,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();
  const [theme, setTheme] = useState("auto");

  useEffect(() => {
    if (theme === "auto") {
      document.documentElement.setAttribute(
        "data-bs-theme",
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  }, [theme]);
  return (
    <div class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" onClick={() => nav("/")}>
          Kihamda
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title">Menu</h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a onClick={() => nav("/about")} class="nav-link">
                  ABOUT
                </a>
              </li>
              <li class="nav-item">
                <a onClick={() => nav("/blog")} class="nav-link">
                  BLOG
                </a>
              </li>
              <li class="nav-item">
                <a onClick={() => nav("/contact")} class="nav-link">
                  CONTACT
                </a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  href="https://x.com/code_kihamda"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nav-link"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
              <li class="nav-item dropdown d-flex">
                <button
                  class="btn btn-link nav-link dropdown-toggle d-flex align-items-center align-self-center"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-label="テーマを切り替える"
                >
                  <FontAwesomeIcon
                    icon={
                      theme == "light"
                        ? faSun
                        : theme == "dark"
                        ? faMoon
                        : faCircleHalfStroke
                    }
                  />
                  <span class="d-lg-none ms-2" id="bd-theme-text">
                    テーマを切り替える
                  </span>
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-end"
                  aria-labelledby="bd-theme-text"
                >
                  <li>
                    <button
                      type="button"
                      class={`dropdown-item d-flex align-items-center ${
                        theme == "light" ? "active" : ""
                      }`}
                      onClick={() => setTheme("light")}
                    >
                      <FontAwesomeIcon icon={faSun} />
                      <font>ライト</font>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class={`dropdown-item d-flex align-items-center ${
                        theme == "dark" ? "active" : ""
                      }`}
                      data-bs-theme-value="dark"
                      onClick={() => setTheme("dark")}
                    >
                      <FontAwesomeIcon icon={faMoon} />
                      <font>暗い</font>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      class={`dropdown-item d-flex align-items-center ${
                        theme == "auto" ? "active" : ""
                      }`}
                      data-bs-theme-value="auto"
                      onClick={() => setTheme("auto")}
                    >
                      <FontAwesomeIcon icon={faCircleHalfStroke} />
                      <font>オート</font>
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
