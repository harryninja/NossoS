import React from "react";
import { Navigation } from "../../components/home/Navigation-tranparent";
import { Footer } from "../../components/home/Footer";
import { CausasIndividuais } from "../../components/causas/CausasIndividuais";
import  './Causas.css'

const App = () => {


  return (
    <>
      <Navigation />
        <CausasIndividuais />
      <Footer />
    </>
  );
};

export default App;