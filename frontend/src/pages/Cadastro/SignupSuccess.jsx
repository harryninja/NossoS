import React from "react";
import { Link } from "react-router-dom";
import "./SignupSuccess.css"

const SignupSuccess = () => {
  return (
    <div>
      <h1>Cadastro realizado com Sucesso!</h1>
      <h2>Ir para Dashboard</h2>
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </div>
  );
};

export default SignupSuccess;
