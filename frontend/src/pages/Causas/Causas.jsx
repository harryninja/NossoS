import React from "react";
import { Navigation } from "../../components/home/Navigation";
import './Causas.css'
import CausasAtuais from '../../components/causas/causas'
import JsonData from "../../data/data.json";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../components/home/Footer";

const Causas = () => {
  // states para trazer mensagem de erro da api
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    password: "",
    reEnterPassword: "",
    profession: "montador"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDisable(e.target.value === "");
    setUser({
      ...user,
      [name]: value,
    });
  };

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // efeito para carregar a página com scroll no alto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <CausasAtuais data={landingPageData.Eventos} />
      <Footer />
    </div>
  );
};

export default Causas;
