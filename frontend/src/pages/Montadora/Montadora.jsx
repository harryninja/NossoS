import React from "react";
import { Navigation } from "../../components/home/Navigation";
import logoexpo from "../../images/Frame-124.png";
import circle from "../../images/green-circle.png";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Montadora = () => {
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
    <div id="montador">
      <Navigation />
      <div className="main-expo">
        <div className="expo-1">
          <div className="expo-img">
            <img src={logoexpo} alt="" width="160px" />
          </div>
          <h2>
            Hey <span style={{ color: "#00B100" }}>Montador</span>, Preparamos
            um forms especial para você
          </h2>
          <div className="circ-img">
            <img src={circle} alt="" width="200px" />
          </div>
        </div>
        <div className="form-expo">
          <h4>Preencha as seguintes informações:</h4>
          <Form className="form2">
            <Form.Group className="md-3 input-line" controlId="formBasicname">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                name="name"
                className="name"
                value={user.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group
              className="md-3 input-line"
              controlId="formBasicEmpresa"
            >
              <Form.Label>Empresa</Form.Label>
              <Form.Control
                type="text"
                name="company"
                className="empresa"
                value={user.company}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="md-3 input-line" controlId="formBasicEmail">
              <Form.Label>E-mail</Form.Label>
              <Form.Control
                type="email"
                name="email"
                className="email"
                value={user.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="md-3 input-line" controlId="formBasicPhone">
              <Form.Label>Telefone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="(11)12345-6789"
                className="phone"
                value={user.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group
              className="md-3 input-line"
              controlId="formBasicPassword"
            >
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Digite uma senha forte"
                className="password"
                value={user.password}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group
              className="md-3 input-line"
              controlId="formBasicPassword"
            >
              <Form.Label>Confirme a senha</Form.Label>
              <Form.Control
                type="password"
                name="reEnterPassword"
                placeholder="Confirme sua senha"
                className="confirmpass"
                value={user.reEnterPassword}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="button-cad">
              <div className="cad-error">
                {hasError && <span>{errorMessage}</span>}
              </div>
              <Button
                variant="primary"
                type="submit"
                className="btn-cad"
                onClick={register}
                disabled={disable}
              >
                Cadastrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Montadora;
