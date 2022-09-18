
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import  Cadastro  from './pages/advogado/cadastro/index.js';
import Login from './pages/advogado/login/index.js'
import Admin from './pages/advogado/admin/index.js';
import Menulateral from './components/cabecalho/index.js';


export default function Index() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/advogado/cadastro" element={<Cadastro />} />
        <Route path="/advogado/login" element={<Login />} />
        <Route path="/advogado/admin" element={<Admin />} />
        <Route path="/cabecalho" element={<Menulateral />} />

    </Routes>
    </BrowserRouter>
    )
}