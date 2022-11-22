import React, { useState } from "react";
import "../../pages/Eventos/EventosStyle.css";
import frame from "../../images/Frame-123.png";
import evento_pic from "../../images/stand-madeira.jpeg";
import { Image } from "../home/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faEye } from "@fortawesome/free-regular-svg-icons";
import ModalEvento from "../modal/Modal";
import data from "../../data/data.json";

import { Link } from "react-router-dom";

const EventosAtuais = (props) => {

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div id="eventos">
      <section className="mobile-container desk-container content">
        <div className="banner-inicial">
          <div className="evento-destaque">
            <img src={frame} alt="" />
            <h2 className="text-box-event">
              <span className="desk-break mob-break">Conheça </span>
              <span className="desk-break mob-break">
                os <span className="text-promoter">eventos </span>
              </span>
              <span className="desk-break mob-break">do momento</span>
            </h2>
          </div>
          <div className="imagem-info">
            <div className="imagem">
              <img src={evento_pic} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mobile-container desk-container">
          <div>
            <div className="eventos">
                {data.Eventos.map((item, index) => (
                  <div key={index} className="evento">
                    <Link to={'/eventos-individuais'}>
                    <Image
                        title={item.title}
                        smallImage={item.smallImage}
                      />
                    </Link>
                    <div className="container-event">
                        <div className="info-evento">{item.title}</div>
                        <div className="data-hora">
                          <FontAwesomeIcon icon={faCalendarDays} />
                          <p>{item.date}</p>
                          <FontAwesomeIcon icon={faClock} />
                          <p>{item.time}</p>
                        </div>
                        <div className="localizacao">
                          <FontAwesomeIcon icon={faLocationDot} />
                          <p>{item.location}</p>
                          <FontAwesomeIcon icon={faEye} className="look" />
                        </div>
                      </div>
                  </div>
                ))}
                <div>
                  {clickedImg && (
                    <ModalEvento
                      clickedImg={clickedImg}
                      setClickedImg={setClickedImg}
                    />
                  )}
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventosAtuais;
