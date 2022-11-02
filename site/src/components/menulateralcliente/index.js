import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

export default function MenulateralCliente(){

    const navigate = useNavigate();

    async function sairClick(){
        storage.remove('cliente-logado');
        navigate('/login');
        
    }
    async function Associadosclick(){
        
        navigate('/associados');
        
    }

    async function agendadasClick(){
        
        navigate('/agendadas');
    
}

    return(
        <nav className="main-menu-lateral-cliente">
            <div className='logo'>
                <img src='/assets/images/logodourada.svg' alt=''/>
            </div>

            <div className='menu-lateral-items'>
                <div >
                    <p> Conversas </p>
                </div>
                <div onClick={agendadasClick}>
                    <p>Consultorias Agendadas</p>
                </div>
                <div onClick={Associadosclick}>
                    <p>Associados</p>
                </div>
            </div>
            <div onClick={sairClick} className='menu-lateral-sair'>
                <img src='/assets/images/sair.svg' alt=''/>
                <p >Sair</p>
            </div>
        </nav>
    );
}