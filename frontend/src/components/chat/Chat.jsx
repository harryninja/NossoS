import React from "react";
import { Navigation } from "../../components/home/Navigation";
import logoexpo from "../../images/Frame-124.png";
import circle from "../../images/green-circle.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./CadStyle.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/home/Footer";

const ChatPop = () => {
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
    <div id="montador">
      <Navigation />
      <div className="main-expo">


      </div>
      <Footer />
    </div>
  );
};

export default ChatPop;
