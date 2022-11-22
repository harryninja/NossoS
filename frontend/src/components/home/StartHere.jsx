/* eslint-disable jsx-a11y/anchor-is-valid */
import Circle from "../../images/meio-circ-laranja-claro2.png";
import Expositor from "../../images/Frame-122.png";
import Promotor from "../../images/Frame-123.png";
import Montador from "../../images/Frame-124.png";
import { Link } from "react-router-dom";

export const StartHere = () => {
  return (
    <div id="start-here" className="text-center">
      <img src={Circle} alt="" className="circle-img2" />
      <div className="start-here">
        <div className="mobile-container desk-container">
          <div className="comece-aqui">
            <div className="comece-aqui-titulo">
              <h2>
                Comece
                <strong style={{ color: "#FF8401" }}> aqui</strong>
              </h2>
              <p>Quem é você no mercado?</p>
            </div>
            <div className="tipo-mercado">
              <Link to="/cadastro-expositor">
                <div className="overlay"></div>
                <div className="comece-expositor">
                  <img src={Expositor} alt="" width="150" />
                  <span>Expositor</span>
                </div>
              </Link>
              <Link to="/cadastro-promotor">
                <div className="overlay"></div>
                <div className="comece-promotor">
                  <img src={Promotor} alt="" width="150" />
                  <span>Promotor</span>
                </div>
              </Link>
              <Link to="/cadastro-montador">
                <div className="overlay"></div>
                <div className="comece-montador">
                  <img src={Montador} alt="" width="150" />
                  <span>Montador</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
