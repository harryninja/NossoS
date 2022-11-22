import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Contact = () => {
  const form = useRef();

  const [telefone, setTelefone] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e6ch969",
        "template_qed9hbq",
        form.current,
        "RTDNYuWWdDPOR__S7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="form-orcamento">
      <div className="form-orcamento-titulo">
        <h2>
          Peça aqui seu <strong style={{ color: "#FF8400" }}>orçamento</strong>
        </h2>
      </div>
      <div className="form-orcamento-campos">
        <Form ref={form} onSubmit={sendEmail}>
          <div className="form1">
            <Form.Group className="md-3" controlId="formBasicCity">
              <Form.Control
                type="text"
                name="cidade"
                placeholder="Cidade"
                className="city"
                required
              />
            </Form.Group>

            <Form.Group className="md-3" controlId="formBasicDate">
              <Form.Control
                type="date"
                name="data"
                placeholder="Data do pedido"
                className="date"
                required
              />
            </Form.Group>

            <Form.Group className="md-3" controlId="formBasicProject">
              <Form.Control
                type="text"
                name="tamanho"
                placeholder="Tamanho do Projeto"
                className="project"
                required
              />
            </Form.Group>
          </div>
          <div className="form2">
            <Form.Group className="md-3" controlId="formBasicName">
              <Form.Control type="text" name="user_name" placeholder="Nome" />
            </Form.Group>

            <Form.Group className="md-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="user_email"
                placeholder="Seu email"
                required
              />
            </Form.Group>

            <Form.Group className="md-3" controlId="formBasicPhone">
              <Form.Control
                type="tel"
                name="telefone"
                placeholder="(XX)XXXXX-XXXX"
                value={telefone}
                onChange={(event) => setTelefone(event.target.value)}
                required
              />
            </Form.Group>
          </div>

          <div className="form3">
            <FloatingLabel controlId="floatingTextarea2">
              <Form.Control
                as="textarea"
                placeholder="Deixe um comentario"
                style={{ height: "100px" }}
                name="message"
                required
              />
            </FloatingLabel>

            <Button variant="primary" type="submit" className="btn-send">
              pedir
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
