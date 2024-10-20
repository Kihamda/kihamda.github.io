import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faCircleHalfStroke,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem("colorTheme");
    if (storedTheme) {
      return storedTheme;
    }

    return "auto";
  };
  const [theme, setTheme] = useState(getPreferredTheme());

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

    localStorage.setItem("colorTheme", theme);
  }, [theme]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleChange);
    };
  }, []);

  const handleChange = () => {
    const storedTheme = localStorage.getItem("colorTheme");
    if (storedTheme !== "light" && storedTheme !== "dark") {
      setTheme(getPreferredTheme());
    }
  };

  return (
    <div
      id="header"
      className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
    >
      <div className="container">
        <NavLink className={"navbar-brand bold d-flex"} to="/">
          <svg
            version="1.1"
            id="_x32_"
            className="d-inline fs-5 text-reset pe-1"
            style={{ width: "calc(var(--bs-navbar-brand-font-size) * 1.2)" }}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            space="preserve"
          >
            <g>
              <path
                className="st0"
                d="M511.666,247.81c-0.057-1.733-0.123-3.459-0.211-5.18c-0.301-5.875-0.804-11.7-1.495-17.489
		c-0.123-1.015-0.24-2.034-0.375-3.045c-0.88-6.695-2.022-13.32-3.418-19.878c-0.008-0.031-0.016-0.07-0.023-0.105
		c-5.742-26.905-15.806-52.549-29.97-76.308c-0.426-0.714-0.851-1.433-1.284-2.143c-2.9-4.763-5.963-9.436-9.194-14.034
		c-1.026-1.464-2.065-2.916-3.123-4.357c-1.522-2.077-2.9-4.228-4.493-6.269c-4.852-6.285-10.076-12.391-15.522-18.161
		c-3.912-4.165-7.628-7.854-11.36-11.274c-5.524-5.302-11.462-10.431-18.161-15.686C370.093,20.401,318.555,1.839,263.64,0.187
		c-2.518-0.074-5.044-0.148-7.64-0.148c-2.596,0-5.122,0.074-7.999,0.16c-62.176,1.924-121.553,26.53-167.2,69.281
		c-3.842,3.681-7.601,7.441-11.282,11.36C24.688,128.416,0,190.639,0,256.039c0,44.824,11.84,88.972,34.236,127.682
		c9.654,16.786,21.526,32.776,35.283,47.525c3.681,3.834,7.44,7.593,11.282,11.274c14.651,13.675,30.637,25.547,47.521,35.283
		c36.419,21.01,77.803,32.764,119.679,33.998c2.639,0.082,5.282,0.16,7.999,0.16c2.717,0,5.36-0.078,7.999-0.16
		c62.176-1.924,121.553-26.53,167.2-69.281c4.13-3.876,7.823-7.593,11.282-11.36C487.312,383.584,512,321.393,512,256.039
		C512,253.275,511.752,250.558,511.666,247.81z M467.247,256c0,116.482-94.765,211.247-211.247,211.247
		c-116.478,0-211.243-94.765-211.243-211.247c0-116.482,94.765-211.247,211.243-211.247C372.482,44.753,467.247,139.518,467.247,256
		z"
              ></path>
              <path
                className="st0"
                d="M247.025,277.799c-0.351-0.14-0.699-0.222-1.132-0.222c-0.102,0-0.207,0.008-0.32,0.016l-98.298,98.321
		c-0.945,2.666-1.269,5.302-0.968,7.823c0.476,5.309,3.342,8.994,7.8,13.211c0.14,0.14,14.167,14.666,34.033,22.9
		c18.11,7.472,36.208,7.854,39.651,7.854l0.624-0.008c5.43,0,10.654-0.289,14.893-3.791c2.069-1.675,3.697-3.767,4.856-6.285
		l-0.066-139.241C247.794,278.15,247.486,277.982,247.025,277.799z"
              ></path>
              <path
                className="st0"
                d="M265.057,234.201c0.43,0.176,0.855,0.254,1.335,0.254h0.066l98.263-98.282c0.941-2.42,1.304-5.153,1.05-7.909
		c-0.472-5.247-3.365-8.944-7.878-13.203c-0.14-0.148-14.085-14.674-34.033-22.908c-17.934-7.425-35.915-7.846-40.12-7.846
		c-0.027,0-0.054,0-0.078,0c-5.469,0-10.724,0.285-14.893,3.716c-2.151,1.749-3.853,3.982-4.934,6.519l0.062,138.999
		C264.268,233.822,264.682,234.057,265.057,234.201z"
              ></path>
              <path
                className="st0"
                d="M234.244,265.014c-0.746-1.741-2.397-2.818-4.306-2.818h-127.92c-5.438,0-10.525,2.381-13.956,6.535
		c-3.318,4.107-3.884,8.744-3.716,14.889c-0.004,0.203-0.382,20.331,7.847,40.28c8.233,19.87,22.759,33.896,22.904,34.033
		c3.83,3.83,7.722,7.308,13.203,7.8c0.617,0.074,1.234,0.109,1.85,0.109c1.956,0,3.966-0.363,6.039-1.116l98.306-98.372
		C234.494,265.873,234.416,265.451,234.244,265.014z"
              ></path>
              <path
                className="st0"
                d="M396.986,154.071c-3.83-3.83-7.726-7.312-13.21-7.804c-0.57-0.051-1.136-0.078-1.702-0.078
		c-2.104,0-4.166,0.351-6.18,1.085l-98.306,98.372c0,0.496,0.078,0.906,0.25,1.339c0.644,1.686,2.342,2.818,4.228,2.818h127.998
		c5.399,0,10.454-2.381,13.878-6.535c3.38-4.091,3.958-8.736,3.79-14.889c0.004-0.203,0.386-20.331-7.846-40.28
		C411.653,168.231,397.13,154.208,396.986,154.071z"
              ></path>
              <path
                className="st0"
                d="M88.066,243.269c3.494,4.154,8.581,6.535,13.952,6.535h127.92c1.909,0,3.556-1.078,4.306-2.818
		c0.172-0.438,0.25-0.863,0.203-1.452l-98.318-98.298c-2.022-0.714-4.036-1.077-5.988-1.077c-0.613,0-1.226,0.035-1.838,0.109
		c-5.192,0.468-8.905,3.334-13.203,7.8c-0.148,0.141-14.674,14.163-22.908,34.034c-8.229,19.948-7.85,40.076-7.847,40.276
		C84.346,233.799,84.631,239.022,88.066,243.269z"
              ></path>
              <path
                className="st0"
                d="M423.942,268.73c-3.358-4.154-8.417-6.535-13.878-6.535H282.066c-1.885,0-3.588,1.132-4.228,2.818
		c-0.164,0.41-0.25,0.898-0.203,1.534l98.236,98.216c2.014,0.714,4.048,1.078,6.047,1.078c0.625,0,1.246-0.035,1.858-0.109
		c5.216-0.469,8.795-3.217,13.206-7.8c0.148-0.137,14.671-14.163,22.904-34.033c8.233-19.949,7.85-40.077,7.846-40.276
		C427.732,278.193,427.444,272.97,423.942,268.73z"
              ></path>
              <path
                className="st0"
                d="M243.309,88.019c-4.072-3.283-8.682-3.74-13.058-3.74l-2.452,0.024c-3.443,0-21.541,0.379-39.659,7.85
		c-19.866,8.233-33.893,22.759-34.029,22.904c-3.83,3.83-7.312,7.718-7.804,13.206c-0.308,2.654,0.055,5.418,1.089,8.046
		l98.236,98.236l0.082-0.012c0.508-0.086,0.902-0.168,1.312-0.332c0.441-0.172,0.761-0.348,1.14-0.706L248.15,94.23
		C246.951,91.755,245.276,89.608,243.309,88.019z"
              ></path>
              <path
                className="st0"
                d="M266.392,277.545c-0.48,0-0.906,0.078-1.335,0.254c-0.386,0.152-0.796,0.387-1.222,0.789l0.016,138.94
		c1.179,2.604,2.834,4.747,4.919,6.371c3.986,3.358,8.635,3.822,13.066,3.822l2.452-0.02c3.447,0,21.537-0.382,39.573-7.854
		c19.948-8.233,33.893-22.759,34.03-22.9c3.712-3.642,7.382-7.663,7.882-13.211c0.25-2.752-0.109-5.488-1.085-7.964L266.392,277.545
		z"
              ></path>
            </g>
          </svg>
          Kihamda
        </NavLink>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas"
          aria-controls="offcanvas"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvas"
          aria-labelledby="offcanvasLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title">Menu</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink
                  className="nav-link"
                  to="/about"
                  activeclassname="active"
                >
                  ABOUT
                </NavLink>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink
                  className="nav-link"
                  to="/myapp"
                  activeclassname="active"
                >
                  MY APP
                </NavLink>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink
                  className="nav-link"
                  to="/blog"
                  activeclassname="active"
                >
                  BLOG
                </NavLink>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <NavLink
                  className="nav-link"
                  to="/contact"
                  activeclassname="active"
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-lg-auto d-none d-lg-flex flex-row justify-content-around">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a
                  href="https://x.com/code_kihamda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </li>
              <li className="nav-item dropdown d-flex">
                <button
                  className="btn btn-link nav-link dropdown-toggle d-flex align-items-center align-self-center"
                  id="bd-theme"
                  type="button"
                  aria-expanded="false"
                  data-bs-toggle="dropdown"
                  data-bs-display="static"
                  aria-label="テーマを切り替える"
                >
                  <FontAwesomeIcon
                    icon={
                      theme === "light"
                        ? faSun
                        : theme === "dark"
                        ? faMoon
                        : faCircleHalfStroke
                    }
                  />
                  <span className="d-lg-none ms-2" id="bd-theme-text">
                    テーマを切り替える
                  </span>
                </button>
                <ul
                  className="dropdown-menu dropdown-menu-end position-absolute"
                  aria-labelledby="bd-theme-text"
                >
                  <li>
                    <button
                      type="button"
                      className={`dropdown-item d-flex align-items-center ${
                        theme === "light" ? "active" : ""
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
                      className={`dropdown-item d-flex align-items-center ${
                        theme === "dark" ? "active" : ""
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
                      className={`dropdown-item d-flex align-items-center ${
                        theme === "auto" ? "active" : ""
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
          <div className="offcanvas-footer d-lg-none text-center p-0">
            <div className="row">
              <div className="col-2">
                <a
                  href="https://x.com/code_kihamda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
              <div className="col-8 d-flex justify-content-center">
                <div className="nav-item dropdown d-flex mb-3">
                  <button
                    className="btn btn-link nav-link dropdown-toggle d-flex align-items-center align-self-center"
                    id="bd-theme"
                    type="button"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-label="テーマを切り替える"
                  >
                    <FontAwesomeIcon
                      icon={
                        theme === "light"
                          ? faSun
                          : theme === "dark"
                          ? faMoon
                          : faCircleHalfStroke
                      }
                    />
                    <span className="d-lg-none ms-2" id="bd-theme-text">
                      テーマを切り替える
                    </span>
                  </button>
                  <ul
                    className="dropdown-menu dropdown-menu-end position-absolute"
                    aria-labelledby="bd-theme-text"
                    style={{ transform: "translateY(-100%)" }}
                  >
                    <li>
                      <button
                        type="button"
                        className={`dropdown-item d-flex align-items-center ${
                          theme === "light" ? "active" : ""
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
                        className={`dropdown-item d-flex align-items-center ${
                          theme === "dark" ? "active" : ""
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
                        className={`dropdown-item d-flex align-items-center ${
                          theme === "auto" ? "active" : ""
                        }`}
                        data-bs-theme-value="auto"
                        onClick={() => setTheme("auto")}
                      >
                        <FontAwesomeIcon icon={faCircleHalfStroke} />
                        <font>オート</font>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
