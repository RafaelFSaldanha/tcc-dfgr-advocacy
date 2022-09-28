
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CadastroAdvogado  from './pages/advogado/cadastro/index.js';
import LoginAdvogado from './pages/advogado/login/index.js';
import Admin from './pages/advogado/admin/index.js';
import AgendarConsultoria from './pages/advogado/agendar/index.js';
import LandingPage from './pages/advogado/landingpage/index.js';
import LoginUsuario from './pages/cliente/login/index.js';
import CadastroUsuario from './pages/cliente/cadastro/index.js';

export default function Index() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/cadastro/advogado" element={<CadastroAdvogado />} />
        <Route path="/login/advogado" element={<LoginAdvogado />} />
        <Route path="/advogado/home" element={<Admin />} />
        <Route path="/advogado/agendarconsultoria" element={<AgendarConsultoria />} />
        
        <Route path="/landingpage" element={<LandingPage />} />

        <Route path='/cadastro/usuario' element={<CadastroUsuario />} />
        <Route path='/login/usuario' element={<LoginUsuario />} />
    </Routes>
    </BrowserRouter>
    )
}