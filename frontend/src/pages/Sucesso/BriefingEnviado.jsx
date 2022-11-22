import React from "react";
import { Navigation } from "../../components/home/Navigation";
import './BriefingEnviado.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/home/Footer";

import face from '../../images/Frame-122.png'
import halfCircle from '../../images/meio-circ-cinza.png'

const BriefingEnviado = () => {
  // states para trazer mensagem de erro da api
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();


  // efeito para carregar a página com scroll no alto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="briefing-enviado">
      <Navigation />
      <div className="mainer">
        <div className="left">
          <img src={face} />
        </div>
        <div className="right">
          <h1>
            SUCESSO!
          </h1>
          <h2>
Seu briefing já foi enviado!
          </h2>
          <p>
Em breve você receberá um email/sms confirmando sua solicitação, fique ligado.
          </p>
          <img src={halfCircle} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BriefingEnviado;
