/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import Seta from '../../images/next.png'
import Frame from '../../images/Frame-123.png'

import data from "../../data/data.json";

import ModalEvento from "../modal/Modal";

export const EventosIndividuais = () => {

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
  
    const handleClick = (item, index) => {
      setCurrentIndex(index);
      setClickedImg(item.largeImage);
    };


  return (
    <>
      <div className="intro-Evento" style={{ background: 'url(https://www.feirasenegocios.com.br/wp-content/uploads/2021/02/242807715_976476156263461_1004322689570164283_n.jpg)' }}>
            <header className="header__banner" style={{ background: '#000000a8', heigth: '100%' }}>
                <div className="main__page">
                    <div className="intro__text">
                        <h2 className="evento__title--banner">
                            ABRIN
                        </h2>
                        <div className="container__btn--banner"> 
                            <a className="btn__banner">Reserve sua vaga <img className="seta" src={Seta} /> </a>
                        </div>
                    </div>
                    <div className="intro__text">
                        <p>
                            O EVENTO MAIS ESPERADO DA COMUNIDADE DO BRINQUEDO!
                        </p>
                    </div>
                </div>
            </header>
        </div>
        <div style={{ background: '#FFFFFF', position: 'relative', bottom: '50px' }}>
            <div className="container__orangeBox">
                <div className="container__orangeBox--content">
                    <h3>Localização</h3>
                    <p>EXPO CENTER NORTE</p>
                </div>
                <div className="container__orangeBox--content">
                    <h3>Data</h3>
                    <p>De 05/03/2023 a 08/03/2023</p>
                </div>
                <div className="container__orangeBox--content">
                    <h3>Horário</h3>
                    <p>Das 10:00 às 20:00</p>
                </div>
                <div className="container__orangeBox--content">
                    <h3>Links</h3>
                    <p>Quisque vitae metus et ligula eleifend pretium Bio Brasil Fair</p>
                </div>
            </div>
        </div>

        <div className="container__description">
            <h2>Descrição</h2>
            <p>
                A ABRIN 2023 acontece de 05 a 08 de março de 2023, no Expo Center Norte em São Paulo, e carrega o título de maior
                evento do setor de brinquedos da América Latina e principal evento de negócios do setor. São milhares de visitantes
                e lançamentos no encontro que abre a temporada de negócios no ano. O evento é co-realizado pela Francal Feiras e Abrinquedos
                Associação Brasileira dos Fabricantes de Brinquedos.
            </p>
        </div>

        <div className="eventos__individuais">
            {data.EventosIndividuais.map((item, index) => (
            <div key={index} className="evento__individual" onClick={() => handleClick(item, index)}>
                <img src={item.smallImage}
                />
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

        <div className="container__reserve--vaga">
            <div className="frame-reserve">
                <img src={Frame} alt="img" />
            </div>
            <div>
                <h2>Tem interesse?</h2>
                <div className="container__btn--reserve"> 
                    <a className="btn__reserve">Reserve sua vaga <img className="seta" src={Seta} /> </a>
                </div>
            </div>
        </div>
    </>
  );
};

export default EventosIndividuais;
