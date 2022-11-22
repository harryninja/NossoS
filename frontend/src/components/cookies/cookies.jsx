import React, {useState} from "react";
import { Navigation } from "../../components/home/Navigation";
import "./cookies.css"
import {Routes, Route, useNavigate} from 'react-router-dom';


import { useEffect } from "react";

const Cookies = () => {
    const navigate = useNavigate();
    const [acceptAllCookies, setAcceptAllCookie] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const acceptAllCookie = () => {
        localStorage.setItem("cookieAccepted", true)
        setAcceptAllCookie(true)
        navigate('/')
      }

    return (
        <div id="cookies">
            <Navigation />
            <div className="main">
                <div className="main-card">
                    <div className="carding">
                        <h2>
                            Gerencie suas configurações de cookies
                        </h2>
                        <p>
                            Você pode controlar como usamos cookies em cada dispositivo e navegador que você usa. Essas configurações serão aplicadas ao seu dispositivo atual quando voce usar o Chrome.
                        </p>
                    </div>
                    <div className="carding">
                        <h2>
                            O que são cookies?
                        </h2>
                        <p>
                            Cookies e tecnologias de rastreamoento são pequenos arquivos de texto que ficam armazenados em seu dispositivo quando você usa um navegador da internet. Alguns cookies são essenciais para que você use nosso site, enquanto outros cookies coletam dados sobre seus hábitos de navegação. Usamos esses dados para oferecer a melhor experiência
                        </p>
                    </div>
                    <div className="carding">
                        <h2>
Marketing
                        </h2>
                        <p>
                            Usamos cookies de marketing para enviar anúncios que achamos que você goste.
                            <br />
                            <br />
                            Por exmeplo, os cookies de marketing nos permitem mostrar anúncios personalizados do PayPal com base em seus interesses.
                        </p>
                        <a href="#"><span>Consulte nossos parceiros</span></a>
                    </div>
                    <div className="carding">
                        <h2>
Desempenho
                        </h2>
                        <p>
                            Usamos cookies de desempenho para entender como você interage com nosso site.
                            <br />
                            <br />
                            Por exemplo, os cookies de desempenho nos ajudam a saber quais partes do PayPal são as mais populares e quais são as partes que podemos melhorar para você.
                        </p>
                    </div>
                    <div className="carding">
                        <h2>
Funcionais
                        </h2>
                        <p>
                            Usamos cookies funcionais para personalizar sua experiência.
                            <br />
                            <br />
                            Por exemplo, os cookies funcionais nos permitem lembrar suas preferências, como idioma, país ou região e tamanhos de texto.
                        </p>
                    </div>
                    <div className="carding">
                        <h2>
Essenciais
                        </h2>
                        <p>
                            Usamos cookies essenciais para tornar o nosso site um trabalho para você.
                            <br />
                            <br />
                            Por exemplo, os cookies essenciais permitem que você entre em segurança e navegue pelo nosso site. Esses cookies nos ajudam a manter sua conta segura e evitar fraudes.
                        </p>
                    </div>
                    <button className="btn-sender" onClick={acceptAllCookie}>Salvar configurações de cookies</button>
                </div>

            </div>
        </div>
    );
};

export default Cookies;
