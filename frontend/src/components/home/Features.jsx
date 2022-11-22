import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faDollarSign,
  faShieldHalved,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";

export const Features = () => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="row infos">
          <div className="col-xs-6 col-md-3 chart-icon">
            <FontAwesomeIcon icon={faCircleCheck} className="fa" id="test" />
            <p style={{ fontSize: "23px", fontWeight: "800" }}>FÁCIL</p>
            <p>Cuidamos do seu briefing e do seu projeto.</p>
          </div>
          <div className="col-xs-6 col-md-3 chart-icon">
            <FontAwesomeIcon icon={faDollarSign} className="fa" />
            <p style={{ fontSize: "23px", fontWeight: "800" }}>GRÁTIS</p>
            <p>
              Cadastro 100% gratuito. Recebe as propostas e escolha a que melhor
              te atende.
            </p>
          </div>
          <div className="col-xs-6 col-md-3 chart-icon">
            <FontAwesomeIcon icon={faShieldHalved} className="fa" />
            <p style={{ fontSize: "23px", fontWeight: "800" }}>SEGURO</p>
            <p>Segurança nos pagamentos e parcelamentos.</p>
          </div>
          <div className="col-xs-6 col-md-3 chart-icon">
            <FontAwesomeIcon icon={faRecycle} className="fa" />
            <p style={{ fontSize: "23px", fontWeight: "800" }}>
              SOCIO-AMBIENTAL
            </p>
            <p>Apoiamos projetos sociais e ambientais</p>
          </div>
        </div>
      </div>
    </div>
  );
};
