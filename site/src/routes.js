
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Cadastro  from './pages/advogado/cadastro/index.js';
import Login from './pages/advogado/login/index.js'
import Admin from './pages/advogado/admin/index.js';
import AgendarConsultoria from './pages/advogado/agendar/index.js';
import LandingPage from './pages/advogado/landingpage/index.js'


export default function Index() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/advogado/cadastro" element={<Cadastro />} />
        <Route path="/advogado/login" element={<Login />} />
        <Route path="/advogado/home" element={<Admin />} />
        <Route path="/advogado/agendarconsultoria" element={<AgendarConsultoria />} />
        <Route path="/landingpage" element={<LandingPage />} />
    </Routes>
    </BrowserRouter>
    )
}