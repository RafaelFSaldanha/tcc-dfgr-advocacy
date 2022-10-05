import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

export default function Menulateral(){

    const navigate = useNavigate();

    async function sairClick(){
        storage.remove('usuario-logado');
        navigate('/advogado/login');
        
    }
    async function agendarClick(){
        
        navigate('/advogado/agendarconsultoria');
        
    }

    async function agendadasClick(){
        
        navigate('/advogado/consultoriasagendadas');
    
}

    return(
        <nav className="main-menu-lateral">
            <div className='logo'>
                <img src='../../../assets/images/logodourada.svg'/>
            </div>

            <div className='menu-lateral-items'>
                <div >
                    <img src='../../../assets/images/chat.svg'/>
                    <p> Minhas Conversas </p>
                </div>
                <div onClick={agendadasClick}>
                    <img src='../../../assets/images/calendar.svg'/>
                    <p>Consultorias Agendadas</p>
                </div>
                <div onClick={agendarClick}>
                    <img src='../../../assets/images/calendarplus.svg' />
                    <p>Agendar Consultoria</p>
                </div>
            </div>
            <div onClick={sairClick} className='menu-lateral-sair'>
                <img src='../../../assets/images/sair.svg' />
                <p >Sair</p>
            </div>
        </nav>
    );
}