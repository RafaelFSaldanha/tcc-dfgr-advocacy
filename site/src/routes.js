
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import  Cadastro  from './pages/advogado/cadastro/index.js';

export default function Index() {
    return(
    <BrowserRouter>
    <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
    </BrowserRouter>
    )
}