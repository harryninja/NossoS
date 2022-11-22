import React from "react";
import { Navigation } from "../../components/home/Navigation";


import { useEffect } from "react";
import { Footer } from "../../components/home/Footer";

import errorImage from '../../images/acesso-nao-mob.png'

const AcessoErro = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="ErroAcesso">
      <Navigation />
      <div className="error">
        <div className="giant-circle">
          <img src={errorImage} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AcessoErro;
