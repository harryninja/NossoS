import React from "react";
import { Navigation } from "../../components/home/Navigation";
import TextField from "@mui/material/TextField";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useEffect, useState } from "react";
import './Blog.css'
import { Footer } from "../../components/home/Footer";
import { InputAdornment, CardActionArea } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import styled from "@emotion/styled";

import IMG1 from '../../images/imagem-noticia.png'
import IMG2 from '../../images/img2.png'
import IMG3 from '../../images/img3.png'

const Blog = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Carder = styled(Card)`
    margin: 0 15px;
  `

const Title = styled(Typography)`
font-weight: 600;
font-size: 30px;
margin: 20px 0;
`

const Para = styled(Typography)`
font-weight: 400;
font-size: 15px;
`

  return (
    <div id="Blog">
      <Navigation />
      <div className="main">
        <div className="top"><div style={{ 'width': '10vh', 'flexDirection': 'row', 'display': 'flex' }}><h2 className="orange">nosso</h2><h2>blog</h2></div>
          <TextField
            id="standard-basic"
            label="Procurar"
            className="bar"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="middlee">
          <Carder sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={IMG1}
              />
              <CardContent>
                <Title gutterBottom variant="h3" component="div">
                Minha experiência trabalhando com gerenciamento de stands
                </Title>
                <Para variant="h6" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Para>
              </CardContent>
            </CardActionArea>
          </Carder>
          <Carder sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={IMG2}
              />
              <CardContent>
                <Title gutterBottom variant="h3" component="div">
                Como promover seu stand com sucesso
                </Title>
                <Para variant="h6" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Para>
              </CardContent>
            </CardActionArea>
          </Carder>
          <Carder sx={{ maxWidth: 500 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={IMG3}
              />
              <CardContent>
                <Title gutterBottom variant="h3" component="div">
                Deu a louca nos promotores! É tudo ou nada!
                </Title>
                <Para variant="h6" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Para>
              </CardContent>
            </CardActionArea>
          </Carder>
        </div>
        <div className="bottom">
          <div className="bottomHead">
            <h3>Inscreva-se no nosso mailing</h3>
          </div>
          <div><input className="Input-box" placeholder="Digite seu e-mail" /><button className="btn-sender">Inscrever</button></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
