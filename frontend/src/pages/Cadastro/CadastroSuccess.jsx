import React from "react";
import "./CadastroSuccess.css";
import ImgRocket from '../../images/rocket-background.png'


const CadastroSuccess = () => {

  return (
    <div className="container__cadastro--sucesso">
        <div className="Text__success--cadastro">
          <h2>
           Cadastro concluido,
          </h2>

          <h2 style={{ color: "#A8C038" }}>verifique o seu e-mail!</h2>

          <h5>Enviamos um e-mail de convite para o dashboard para</h5>
          <span>fulado@gmail.com</span>

          <p>Acesse sua caixa de entrada e siga as instruções contidas nesse e-mail para ativar a sua conta</p>
          <p>Em caso de dúvidas, entre em contato através do nossostando@gmail.com</p>
        </div>

        <div className="background__cadastro--sucesso">
            <img src={ImgRocket} alt="bg-img" />
        </div>
    </div>
  );
};

export default CadastroSuccess;
