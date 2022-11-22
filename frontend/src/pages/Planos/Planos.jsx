/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navigation } from "../../components/home/Navigation";
import './Planos.css'
import Star from '../../images/estrela1.png'
import Star2 from '../../images/estrela2.png'
import Bubbles from '../../images/tres-bolinha1.png'
import Bubbles2 from '../../images/tres-bolinha2.png'

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Footer } from "../../components/home/Footer";

const Planos = () => {
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

  const register = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/users/auth/register", user)
      .then((res) => {
        navigate("/cadastro-realizado");
        console.log(res.data.msg);
      })
      .catch((error) => {
        // console.log(error.response.data.msg);
        setHasError(true);
        let msgError = error.response.data.msg;
        if (msgError) return setErrorMessage(msgError);
      });
  };

  // efeito para carregar a página com scroll no alto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="planos">
      <Navigation />
      <div className="main-div">
        <div className="backImages">
          <img src={Star} style={{ 'width': '200px', 'height': '200px' }}/>
          <h2 style={{ 'fontWeight': '400', 'color': 'grey', 'padding': '0 200px' }}>Conheça os <br /> nossos planos:</h2>
          <img src={Bubbles} style={{ 'width': '120px', 'height': '120px' }}/>
        </div>
        <div className="middlee">
          <div className="carder-outside">
            <div className="carder">
              <div className="carder-inside">
              <p>Pacote gratuito</p>
                <h3>FREE</h3>
                <h1>$0</h1>
                <button className="btn__plano">INICIAR AGORA</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis inventore rem sit perspiciatis nihil odio voluptatum quisquam nesciunt reprehenderit optio suscipit, animi iste ratione? Aperiam unde nobis mollitia dolore id!</p>
          </div>
          <div className="carder-outside">
            <div className="carder">
              <div className="carder-inside">
              <p style={{ color: '#FF8400' }}>Pacote mensal</p>
                <h3>Mensal</h3>
                <h1>$89</h1>
                <button style={{ backgroundColor: '#FF8400' }} className="btn__plano">COMPRAR PLANO</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis inventore rem sit perspiciatis nihil odio voluptatum quisquam nesciunt reprehenderit optio suscipit, animi iste ratione? Aperiam unde nobis mollitia dolore id!</p>
          </div>
          <div className="carder-outside">
            <div className="carder">
              <div className="carder-inside">
              <p style={{ color: '#00B100' }}>Pacote anual</p>
                <h3>Anual</h3>
                <h1>$349</h1>
                <button style={{ backgroundColor: '#00B100' }} className="btn__plano">COMPRAR PLANO</button>
              </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis inventore rem sit perspiciatis nihil odio voluptatum quisquam nesciunt reprehenderit optio suscipit, animi iste ratione? Aperiam unde nobis mollitia dolore id!</p>
          </div>
        </div>
        <div className="backImages">
          <img src={Bubbles2} style={{ 'width': '150px', 'height': '150px' }}/>
          <div className="divisor"></div>
          <img src={Star2} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Planos;
