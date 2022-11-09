
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
import PerfilAdvogado from './pages/advogado/detalhePerfil/index.js';
import EditarPerfil from './pages/advogado/editarPerfil/index.js'
import AssociadosPage from './pages/advogado/associados/index.js';
import AdminHome from './pages/admin/home/index.js';
import AdminAssociados from './pages/admin/associados/index.js';
import AdminConsultorias from './pages/admin/consultorias/index.js';
import AdminLogin from './pages/admin/login/index.js';
import AdminNovosAssociados from './pages/admin/novosAssociados/index.js';
import InformaAdvogado from './pages/advogado/infoadvogado/index.js';
import InfoAdvogado from './pages/cliente/InfoAdvogado/index.js';
import ConsultoriaCliente from './pages/cliente/consultCliente/index.js';
import DetalhePerfil from './pages/cliente/detalhePerfil/index.js';
import EditarPerfilUsuario from './pages/cliente/editarPerfil/index.js';
import HomeCliente from './pages/cliente/home/index.js';
import InformaçoesParaCliente from './pages/cliente/infoConsulta/index.js'
import ChatPage from './pages/advogado/Chat/index.js'
import SideBar from './components/sideBarChat/index.js'


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
        <Route path='/associados'  element={<AssociadosPage/>} />
        <Route path='/infoadv/:idParam'  element={<InformaAdvogado/>} />
        <Route path='/cadastro' element={<CadastroUsuario />} />
        <Route path='/login' element={<LoginUsuario />} />
        <Route path='/consultoria/:idParam' element={<InformaçoesParaCliente />} />
        <Route path='/advogado/informacoes/:idParam' element={<Informaçoes />} />
        <Route path='/perfil/advogado' element={<PerfilAdvogado />} />
        <Route path='/advogado/editarperfil' element={<EditarPerfil />} />
        <Route path='/admin/home' element={<AdminHome />} />
        <Route path='/admin/associados' element={<AdminAssociados />} />
        <Route path='/admin/consultorias' element={<AdminConsultorias />} />
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route path='/admin/novosAssociados' element={<AdminNovosAssociados />} />
        <Route path='/infoadvogado' element={<InfoAdvogado />} />
        <Route path='/agendadas' element={<ConsultoriaCliente />} />
        <Route path='/detalheperfil' element={<DetalhePerfil />} />
        <Route path='/editarperfil' element={<EditarPerfilUsuario />} />
        <Route path='/home' element={<HomeCliente />} />
        <Route path='/advogado/chat/:idParam' element={<ChatPage />} />
        <Route path='/side' element={<SideBar />} />
    </Routes>
    </BrowserRouter>
    )
}