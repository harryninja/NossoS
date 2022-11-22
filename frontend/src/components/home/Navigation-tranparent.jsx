/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import logoColorido from "../../images/logo-colorido.png";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default_transparent navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link to="/">
            <div className="navbar-brand page-scroll">
              <img src={logoColorido} alt="" width="130px" />
            </div>
          </Link>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/">
                <p className="page-scroll" style={{ color: "#FF8400" }}>
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/como-funciona">
                <p className="page-scroll">COMO FUNCIONA</p>
              </Link>
            </li>
            <li>
              <Link to="/eventos-atuais">
                <p className="page-scroll">EVENTOS</p>
              </Link>
            </li>
            <li>
              <a href="/#start-here" className="page-scroll">
                CADASTRO
                </a>
            </li>
            <li>
              <Link to="/login">
                <p className="page-scroll">LOGIN</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
