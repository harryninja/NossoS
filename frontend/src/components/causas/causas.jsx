/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "../../pages/Causas/Causas.css";
import ModalCausas from "../modal/Modal-Causas";
import data from "../../data/data.json";

import photo from "../../images/photo-causas.avif";
import parceiros from "../../images/logo-colorido.png";

import { Link } from "react-router-dom";

const CausasAtuais = (props) => {

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  return (
    <div id="causas">
      <section className="mobile-container desk-container content">
        <div className="banner-inicial">
          <div className="banner-left">  
              <h2>CAUSAS QUE O <br /> </h2>
              <h2>
              <h2 className="text-promo">NOSSOSTAND <br /></h2>
              </h2>
              <h2>APOIA</h2>
              <a className="text-button" href="#">COMO FUNCIONA </a>
          </div>  
          <div className="Container-text__banner">
            <p>Todo projeto e montagem realizado na nossa plataforma garante a oportunidade de sua empresa apoiar diretamente uma das causas cadastradas na plataforma nossostand</p>
          </div>
        </div>
      </section>
      <section>
        <div className="mobile-container desk-container">
          <div>
            <div className="causas">
                {data.Causas.map((item, index) => (
                  <div key={index} className="evento">
                    <Link to={'/causas-individuais'}>
                      <img className="img-card" src={item.smallImage}/>
                    </Link>
                    <div className="container-causa">
                        <div className="info-causas"><h2>{item.title}</h2> </div>
                        <div className="img-causa">
                          <img src={item.img} />
                          <img className="causas-img_lateral" src={item.img2} />
                          <img className="causas-img_lateral" src={item.img3} />
                          <img className="causas-img_lateral" src={item.img4} />
                        </div>
                        <div className="description">
                          <p>{item.description}</p>
                          <a href={item.url} target="_blank" className="conheca-mais">conheça mais</a>
                        </div>
                      </div>
                  </div>
                ))} 
                <div>
                  {clickedImg && (
                    <ModalCausas
                      clickedImg={clickedImg}
                      setClickedImg={setClickedImg}
                    />
                  )}
                </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-container desk-container content">
        <div className="Container-down">
          <div className="Container-left">  
              <img src={photo} alt="photo" />
          </div>  
          <div className="Container-right">
            <h3>WE STAND for a cause </h3>
            <p>
                WE STAND é a marca guarda-chuva que agrega todos os projetos sustentáveis cadastrados e apoiados na
                plataforma NOSSOSTAND
            </p>
            <p>
                WE STAND é a marca guarda-chuva que agrega todos os projetos sustentáveis cadastrados e apoiados na
                plataforma NOSSOSTAND
            </p>
          </div>
        </div>
      </section>

      <div className="parceiros_title"><p>CONHEÇA OS PARCEIROS  <br /> DO NOSSOSTAND</p> </div>

      <div className="container_parceiros">
        <div className="parceiros-logo">
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
        </div>
        <div className="parceiros-logo">
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
        </div>
        <div className="parceiros-logo">
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
        </div>
        <div className="parceiros-logo">
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
          <img src={parceiros} alt="parceiro" />
        </div>
      </div>
    </div>
  );
};

export default CausasAtuais;
