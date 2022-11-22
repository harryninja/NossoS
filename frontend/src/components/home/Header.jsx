import Slide from "./Slide";
import "../../App.css";
import { Link } from "react-router-dom";

export const Header = (props) => {

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="main-page">
                <div className="col-md-8 intro-text" id="main-text">
                  <h2 className="header-title2">
                    <span>O </span>
                    <span style={{ color: "#FF8400" }}>melhor </span>
                    <span>stand em 5 minutos</span>
                  </h2>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                  <p className="second-p">
                    {props.data ? props.data.question : "Loading"}
                  </p>
                  <div className="input-group mb-3" id="search-input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Local"
                      aria-label="Local"
                      aria-describedby="basic-addon2"
                    />
                    <Link to="/cadastro-briefing">
                    <button className="search-btn">BUSCAR</button>
                    </Link>
                  </div>
                </div>
                <div className="imagem-banner" style={{ opacity: "1" }}>
                  <Slide />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
