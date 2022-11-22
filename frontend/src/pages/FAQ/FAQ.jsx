import React from "react";
import { Navigation } from "../../components/home/Navigation";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import imgBanner from '../../images/banner-enlightment.png'

import './FAQ.css'

import Footer from '../../components/home/Footer'

const Accord = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <div className="banner__faq">
        <img src={imgBanner} alt="img" />
        <h3 className="text__banner--faq">FAQs</h3>
        <h1 className="title__banner--faq">Perguntas</h1>
        <h1 className="title__banner--faq" style={{ top: '380px' }}>frequentes</h1>
        <h1 className="title__banner--faq" style={{ top: '460px', color: '#FF8400' }}>respondidas</h1>
      </div>
      <div className="accordion__container">
        <Accordion className="accordion__faq" expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary style={{ margin: '0 auto' }} 
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px', }} />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>
            1- O que a NossoStand faz? 
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Atuamos facilitando a gestão de projetos para expositores e promotores de feiras.
            Nossos experts em cenografia de stands criam o projeto do zero e acompanham as etapas
            até o dia da execução. Excelência no resultado é o nosso maior objetivo. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>2- NossoStand funciona em todos os estados? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Sim, temos empresas de montagem de stands espalhados em todos os estados do Brasil.
            Elas são cadastradas, e fazemos a curadoria para garantir a qualidade dos resultados. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>
            3- Como é a forma de pagamento? 
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            A forma de pagamento pode ser feita a vista ou parcelada no cartão de crédito, até o dia do evento. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>4- Vocês doam uma parte do valor arrecadado para projetos sustentáveis? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
              Sim. Criamos uma marca WESTAND, com o intuito de apoiar projetos alinhados com os ODS da ONU
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel5bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>5- Sou expositor. Posso orçar projetos com cenografia?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Sim. A Nossostand também tem experts especialistas na área de cenografia. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel6bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>6- Sou promotor. Como faço para cadastrar meu evento/feira?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            É simples. Basta acessar a área de membros, fazer o cadastro, e colocar todos os dados pessoais e empresariais.
            Após isso, basta realizar o passo a passo específico para cadastrar o evento/feira. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel7bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>7- Sou expositor. Como faço para cadastrar meu pedido de stand ou projeto?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            É simples. Após realizar o seu cadastro, você deverá seguir para as próximas etapas,
            onde um briefing detalhado será apresentado a você. É preciso preencher o máximo de informações para que,
            assim, o orçamento seja assertivo. Se precisar de um apoio dos nossos experts, é só solicitar no chat. 
            </Typography>
          </AccordionDetails>
          
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel8bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>8- Sou montador. Como faço para receber um pedido de orçamento?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Após o seu cadastro, você verá projetos disponíveis para que você faça o orçamento.
            Nosso briefing inteligente facilita essa questão, pois permite que você tenha todas as informações necessárias. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel9bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>9- Sou expositor. Tenho garantias de que o projeto será de qualidade?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Fazemos uma curadoria para termos o hall das melhores empresas de montagem de stands do Brasil.
            Você poderá conversar com o expert em montagem, dando o direcionamento para que tudo saia como você imagina. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel10bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>10- Sou expositor. Posso usar inspirações para elaborar meu projeto?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Sim. Existe uma etapa no nosso briefing, onde podes acrescentar imagens para que o
            montador tenha maior facilidade para entender seu conceito de projeto. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel11bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>11- Sou promotor. A visibilidade do meu evento/feira pode aumentar com o uso da plataforma?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Sim. Através da plataforma, você poderá se conectar com empresas em busca de espaço para expor,
            o que irá facilitar o aumento do interesse para participar da sua feira/evento.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel12bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>12- Sou promotor. Terei que pagar para cadastrar meu evento?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
              Não. A Nossostand é uma plataforma gratuita. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel13bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>13- Sou expositor. Terei que pagar para colocar meu projeto?  </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
              Não. A Nossostand é uma plataforma gratuita. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel14bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>14- Sou montador. Terei um briefing pronto para elaborar o orçamento? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
              Sim. Todo o briefing será feito juntamente com nossa equipe de experts em stands.
              O passo a passo com todas as informações necessárias para a construção do projeto é super didático.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel15bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>15- Sou montador. Como vou colher os dados para montar o projeto? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Os dados do briefing estarão disponíveis para a sua empresa montadora. Se você for o escolhido,
            você ainda poderá se comunicar com o expositor através da nossa plataforma.  
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel16bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>16- Sou montador. Posso tirar dúvidas para montar um projeto ajustado às necessidades do cliente? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Sim. Nossa plataforma permite que você possa tirar suas dúvidas com o expositor.
            É possível, inclusive, acrescentar imagens para facilitar a construção do projeto. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel17bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>17- Sou montador. Posso enviar fotos para o cliente conforme a montagem do projeto? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Sim. Conforme a montagem do projeto você, montador,
            pode enviar fotos para garantir que a construção do projeto está adequada às expectativas.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel18bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>18- Sou expositor. Poderei acompanhar o projeto? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
              Sim. Através da nossa plataforma você poderá acompanhar a construção do projeto, podendo, inclusive, ver fotos. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel19bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>19- Sou expositor. Posso colocar limite para o meu orçamento? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
            Sim. Este é um diferencial que facilita toda a conexão. Assim, você define quanto pode pagar,
            o que também facilita para que façamos um projeto mais assertivo. 
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="accordion__faq" expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon style={{ width: '50px', height: '40px' }} />}
            aria-controls="panel4bh-content"
            id="panel20bh-header"
          >
            <Typography sx={{ flexShrink: 0, fontSize: '1.8rem' }}>20- Sou Expositor. Posso orçar projetos para espaços instagramáveis? </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.5rem !important' }}>
              Sim. Sabemos o quanto esses espaços são importantes para feiras/eventos. Por isso, temos experts especialistas na área.  
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="endpage__faq">
        <div>
          <h3>Ainda tem dúvidas?</h3>
          <p>Escreva abaixo sua pergunta <br /> que encaminharemos ao nosso time</p>
          <form className="form__end--faq">
              <input type="text" />
              <button>
              </button>
            </form>
        </div>
      </div>
    </div>
  );
}



const FAQ = () => {

  return (
    <div id="faq">
      <Navigation />
      <div className="mainer">
        <div className="top"></div>
        <Accord />
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default FAQ;
