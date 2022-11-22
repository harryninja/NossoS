import React from "react";
import { Navigation } from "../../components/home/Navigation";
import { useEffect } from "react";
import { Footer } from "../../components/home/Footer";
import './EncontradoErro.css'
import errorImage from '../../images/error-404-mob.png'
const EncontradoErro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="ErroEncontrado">
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

export default EncontradoErro;
