import { Route, Routes } from "react-router-dom";
import Briefing from "./pages/Briefing/Briefing";
import Expositor from "./pages/Cadastro/Expositor";
// import Expositor2 from "./pages/Eventos/Expositor";
import Montador from "./pages/Cadastro/Montador";
import Promotor from "./pages/Cadastro/Promotor";
import SignupSuccess from "./pages/Cadastro/SignupSuccess";
import ComoFunciona from "./pages/ComoFunciona/ComoFunciona";
import EventosAtuais from "./pages/Eventos/EventosAtuais";
import EventosIndividuais from "./pages/Eventos/EventosIndividuais";
import HomePage from "./pages/Home/HomePage";
import Login from "./pages/Login/Login";
import EsqueciSenha from "./pages/Senha/ForgetPassword";
import ResetSenha from "./pages/Senha/ResetPassword";
import SuccessPassword from "./pages/Senha/SuccessPassword";
import EncontradoErro from "./pages/EncontradoErro/EncontradoErro"
import AcessoErro from "./pages/AcessoErro/AcessoErro"
import Planos from "./pages/Planos/Planos"
import Montadora from "./pages/Montadora/Montadora"
import Cookies from "./components/cookies/cookies";
import Blog from "./pages/Blog/Blog";
import FAQ from "./pages/FAQ/FAQ";
import Chat from "./pages/Chat/Chat";
import Dashboard from "./pages/Dashboard/Home";
import DashboardPromotor from "./pages/Dashboard/DashboardPromotor";
import DashboardMontador from "./pages/Dashboard/DashboardMontador";
import Causas from "./pages/Causas/Causas";
import CausasIndividuais from "./pages/Causas/CausasIndividuais";
import BriefingEnviado from "./pages/Sucesso/BriefingEnviado";
import ADM from "./pages/Dashboard/ADM";
import CadastroSucesso from "./pages/Cadastro/CadastroSuccess";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/chat" element={<Chat />} exact />
        <Route path="/dashboard-expositor" element={<Dashboard />} exact />
        <Route path="/dashboard-promotor" element={<DashboardPromotor />} exact />
        <Route path="/dashboard-montador" element={<DashboardMontador />} exact />
        <Route path="/cadastro-expositor" element={<Expositor />} exact />
        <Route path="/cadastro-promotor" element={<Promotor />} exact />
        <Route path="/cadastro-montador" element={<Montador />} exact />
        <Route path="/cadastro-sucesso" element={<CadastroSucesso />} exact />
        <Route path="/login" element={<Login />} exact />
        <Route path="/cadastro-realizado" element={<SignupSuccess />} exact />
        <Route path="/eventos-atuais" element={<EventosAtuais />} exact />
        <Route path="/eventos-individuais" element={<EventosIndividuais />} exact />
        <Route path="/como-funciona" element={<ComoFunciona />} exact />
        <Route path="/forget-password" element={<EsqueciSenha />} exact />
        <Route path="/reset-password" element={<ResetSenha />} exact />
        <Route path="/success-password" element={<SuccessPassword />} exact />
        <Route path="/cadastro-briefing" element={<Briefing />} exact />
        <Route path="/briefing-enviado" element={<BriefingEnviado />} exact />
        <Route path="/cookies" element={<Cookies />} exact />
        <Route path="*" element={<EncontradoErro />} exact />
        <Route path="/nao-autorizado" element={<AcessoErro />} exact />
        <Route path="/planos" element={<Planos />} exact />
        <Route path="/blog" element={<Blog />} exact />
        <Route path="/faq" element={<FAQ />} exact />
        <Route path="/montadora" element={<Montadora />} exact />
        <Route path="/causas" element={<Causas />} exact />
        <Route path="/causas-individuais" element={<CausasIndividuais />} exact />
        <Route path="/admin" element={<ADM />} exact />
      </Routes>
    </div>
  );
}

export default App;
