import React from "react";
import { Navigation } from "../../components/home/Navigation-tranparent";
import { Footer } from "../../components/home/Footer";
import { EventosIndividuais } from "../../components/eventos/EventosIndividuais";
import  './EventosStyle.css'

const App = () => {


  return (
    <>
      <Navigation />
        <EventosIndividuais />
      <Footer />
    </>
  );
};

export default App;
