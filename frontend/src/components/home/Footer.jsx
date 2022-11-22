import React, { useState } from "react";
import logo from "../../images/nossostand-logo-5.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const Footer = (props) => {
  return (
    <div id="contact">
      <div className="container">
        <div className="col-md-3 contact-info1">
          <div className="contact-item contact-1">
            <img src={logo} alt="" width="130px" />
            <p>É meu, é seu, é nosso</p>
          </div>
          <h3 style={{ marginBottom: "-19px", marginTop: "47px" }}>Contato</h3>
          <div className="contact-item contact-mail">
            <span>
              <i className="fa fa-envelope-o"></i>
            </span>
            <p>nosso@nossostand.com.br</p>
          </div>
        </div>
        <div className="col-md-3 contact-info2">
          <div className="contact-item">
            <h3>Sitemap</h3>
            <a href="/#header">Home</a>
          </div>
          <div className="contact-item">
            <Link to="/como-funciona">
              <p>Como funciona</p>
            </Link>
          </div>
          <div className="contact-item">
            <Link to="/eventos-atuais">
              <p>Eventos</p>
            </Link>
          </div>
          <div className="contact-item">
            <Link to="/blog">
              <p>Blog</p>
            </Link>
          </div>
          <div className="contact-item">
            <Link to="/causas">
              <p>Causas</p>
            </Link>
          </div>
        </div>
        <div className="col-md-3 contact-info3">
          <div className="contact-item">
            <h3>Informações Legais</h3>
            <Link to="/planos">
              <p>Planos de Uso</p>
            </Link>
          </div>
          <div className="contact-item">
            <Link to="/cookies">
              <p>Cookies</p>
            </Link>
          </div>
          <div className="contact-item">
            <Link to="/faq">
              <p>Dúvidas FAQ</p>
              </Link>
          </div>
        </div>
        <div className="col-md-3 contact-info4">
          <div className="contact-item">
            <h3>Inscreva-se no nosso Mailing</h3>
          </div>
          <div className="contact-item">
            <Form.Group className="md-3" controlId="formBasicInfos">
              <Form.Control type="text" name="infos" required />
            </Form.Group>
            <Button variant="primary" type="submit" className="btn-infos">
              Enviar
            </Button>
          </div>
        </div>
        <div className="col-md-12">
          <div className="row">
            <div className="social">
              <ul>
                <li>
                  <a target="blank" href={props.data ? "https://www.linkedin.com/company/nossostand/" : "/"}>
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a target="blank" href={props.data ? "https://www.instagram.com/nossostand/" : "/"}>
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a target="blank" href={props.data ? props.data.youtube : "/"}>
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="rights-footer">
        <div className="ns-right">
          <p>&copy; 2022 nossostand. Todos os direitos reservados.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer
