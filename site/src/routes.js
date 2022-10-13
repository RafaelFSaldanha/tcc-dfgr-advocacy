
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CadastroAdvogado  from './pages/advogado/cadastro/index.js';
import LoginAdvogado from './pages/advogado/login/index.js';
import Admin from './pages/advogado/admin/index.js';
import AgendarConsultoria from './pages/advogado/agendar/index.js';
import LandingPage from './pages/advogado/landingpage/index.js';
import LoginUsuario from './pages/cliente/login/index.js';
import CadastroUsuario from './pages/cliente/cadastro/index.js';
import ConsultoriasAgendadas from './pages/advogado/agendadas/index.js';
import SobreNos from './pages/advogado/sobrenos/index.js';
import Informaçoes from './pages/advogado/detalhe/index.js';
import AreaAtuacao from './pages/advogado/atuacao/index.js';
import PerfilAdvogado from './pages/advogado/detalhePerfil/index.js'

export default function Index() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/advogado/cadastro" element={<CadastroAdvogado />} />
        <Route path="/advogado/login" element={<LoginAdvogado />} />
        <Route path="/advogado/home" element={<Admin />} />
        <Route path="/advogado/agendarconsultoria" element={<AgendarConsultoria />} />
        <Route path='/advogado/consultoriasagendadas' element={<ConsultoriasAgendadas />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/sobrenos" element={< SobreNos/>} />
        <Route path='/atuacao'  element={<AreaAtuacao/>} />
        <Route path='/cadastro' element={<CadastroUsuario />} />
        <Route path='/login' element={<LoginUsuario />} />
        <Route path='/advogado/informacoes/:idParam' element={<Informaçoes />} />
        <Route path='/perfil/advogado' element={<PerfilAdvogado />} />
    </Routes>
    </BrowserRouter>
    )
}