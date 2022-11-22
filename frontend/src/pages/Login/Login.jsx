import React from "react";
import { Navigation } from "../../components/home/Navigation";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./LoginStyle.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../../components/home/Footer";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const Validation = yup.object({
  email: yup.string("Preencha o Email corretamente").required("campo obrigatorio"),
  senha: yup.string().required("campo obrigatorio"),
}).required();

const Login = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(Validation)
  });

  const onSubmit = data => {
    setUser({
      email: data.email,
      password: data.senha
    })
    axios
      .post("https://nossostand.willhack.app/users/auth/login", user)
      .then((res) => {
        axios
          .get(`https://nossostand.willhack.app/users/user/${res.data.user._id}`)
          .then((res) => {

            if (res.data.user.profession === "expositor") {
              navigate("/dashboard-expositor")
            }
            if (res.data.user.profession === "montador") {
              navigate("/dashboard-montador")
            }
            if (res.data.user.profession === "promotor") {
              navigate("/dashboard-promotor")
            }
            if (res.data.user.profession === "admin") {
              navigate("/admin")
            }
          }
          )
      })
      .catch((error) => {
        // console.log(error.response.data.msg);
        setHasError(true);
        let msgError = error.response.data.msg;
        if (msgError) return setErrorMessage(msgError);
      });
  }

  return (
    <div id="login">
      <Navigation />
      <div className="main-login">
        <div className="form-login">
          <h2>Entrar</h2>
          <Form className="form__input--login" onSubmit={handleSubmit(onSubmit)}>
            <Form.Control name="email" placeholder="E-mail" {...register("email")} />
            <p>{errors.email?.message}</p>

            <Form.Control name="senha" placeholder="Senha" {...register("senha")} />
            <p>{errors.senha?.message}</p>

            <div className="button-login">
              <Button className="btn-cad" type="submit">Entrar</Button>
            </div>
          </Form>
          <div className="cadastre">
            <h3 className="cadastre">
              <a style={{ "color": "black", "fontWeight": "500" }} href="/forget-password">Esqueci a senha</a>
            </h3>
          </div>
        </div>
        <div className="right-side">
          <h2>É novo aqui? <br /> Cadastre-se</h2>
          <div>
            <h3>
              Faça seu cadastro?&nbsp;
            </h3>
            <div className="btn-cadastro">
              <Button href="/cadastro-expositor" className="btn-cad" type="submit">AQUI</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
