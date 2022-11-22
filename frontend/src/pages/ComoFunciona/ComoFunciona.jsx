import React from "react";
import { Navigation } from "../../components/home/Navigation";
import { Footer } from "../../components/home/Footer";
import "./ComoFuncionaStyle.css";
import bannerEnlightment from "../../images/banner-enlightment.png";
import card3 from "../../images/cards-3.png";
import card3Mob from "../../images/cards-3-mob.png";
import bannerPeq from "../../images/banner-peq.png";
import { useEffect } from "react";

const ComoFunciona = () => {
  // efeito para carregar a página com scroll no alto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Navigation />
      <section>
        <div className="banner-inicio banner-desk">
          <div className="title-works">
            <h2>
              <span className="desk-break">
                Entenda como <br />
              </span>
              <span className="desk-break text-expo">
                nossa plataforma <br />
              </span>
              <span className="desk-break">funciona!</span>
            </h2>
          </div>
          <div className="linha-row">
            <div>
              <img
                className="face-banner"
                src={bannerEnlightment}
                alt=""
                width="100"
              />
            </div>
          </div>
        </div>{" "}
        <div className="banner-inicio banner-mobile">
          <div className="title-works">
            <h2>
              <span className="desk-break">
                Entenda como <br />
              </span>
              <span className="desk-break text-expo">
                nossa plataforma <br />
              </span>
              <span className="desk-break">funciona!</span>
            </h2>
          </div>
          <div className="linha-row">
            <div>
              <img
                className="face-banner"
                src={bannerEnlightment}
                alt=""
                width="100"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div style={{ textAlign: "center", position: "relative" }}>
          <img src={card3} alt="Avatar" className="card-3-img" />
          <img src={card3Mob} alt="Avatar" className="card-3-img-mob" />
        </div>
      </section>
      <section className="mg-40">
        <div>
          <div className="text-center">
            <h2>Cadastro</h2>
          </div>
          <div id="cd-timeline" className="cd-container">
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture"></div>
              <div className="cd-timeline-content">
                <h2>
                  <span>1</span> Cadastro
                </h2>
                <p>Escolha seu usuário e comece!</p>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie"></div>
              <div className="cd-timeline-content">
                <h2>
                  <span>2</span> Pedido de stand
                </h2>
                <p>Se você for expositor, insira a cidade para começar.</p>
              </div>
            </div>

            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-picture"></div>
              <div className="cd-timeline-content">
                <h2>
                  <span>3</span> Hora de brifar
                </h2>
                <p>Preencha todos os detalhes do seu pedido.</p>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-location"></div>
              <div className="cd-timeline-content">
                <h2>
                  <span>4</span>Orçamento inteligente
                </h2>
                <p>
                  A plataforma envia seu pedido para empresas da cidade do seu
                  stand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <img
            src={bannerPeq}
            alt="Avatar"
            className=""
            style={{ width: "100%", boxShadow: "0px 4px 22px 0px #00000040" }}
          />
        </div>
      </section>
      <section style={{ marginTop: "3em" }}>
        <div className="text-center">
          <h2>Cadastro</h2>
        </div>
        <div id="cd-timeline" className="cd-container">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-location"></div>
            <div className="cd-timeline-content">
              <h2>
                <span>5</span>Concorrência e seleção
              </h2>
              <p>
                Nossa equipe de experts te ajudarão a selecionar a melhor
                proposta.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>
            <div className="cd-timeline-content">
              <h2>
                <span>6</span> Dashboard Expositor
              </h2>
              <p>É lá que você escolhe a empresa e conversa</p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>
            <div className="cd-timeline-content">
              <h2>
                <span>7</span> Gestor Nossostand
              </h2>
              <p>
                Você terá acesso ao fluxo das etapas do projeto até a entrega
                final.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>
            <div className="cd-timeline-content">
              <h2>
                <span>8</span> Pagamento seguro
              </h2>
              <p>Pagamento com gateway seguro para todos usuários.</p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img cd-movie"></div>
            <div className="cd-timeline-content">
              <h2>
                <span>9</span>Estrelinhas para todos
              </h2>
              <p>
                No final as empresas avaliam os serviços e deixam sua nota final
                na plataforma.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="bottom">
          <div className="bottomHead">
            <h3>Inscreva-se no nosso mailing</h3>
          </div>
          <div><input className="Input-box" placeholder="Digite seu e-mail" /><button className="btn-sender">Inscrever</button></div>
        </div>
      <Footer />
    </div>
  );
};

export default ComoFunciona;
