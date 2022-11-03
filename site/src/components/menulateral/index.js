import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

export default function Menulateral(){

    const navigate = useNavigate();

    async function sairClick(){
        storage.remove('advogado-logado');
        navigate('/advogado/login');
        
    }
    async function agendarClick(){
        
        navigate('/advogado/agendarconsultoria');
        
    }

    async function agendadasClick(){
        
        navigate('/advogado/consultoriasagendadas');
    
}

    return(
        <nav className="main-menu-lateral-adv">
            <div className='logo'>
                <img src='/assets/images/logodourada.svg' alt=''/>
            </div>

            <div className='menu-lateral-items'>
                <div >
                    <img src='/assets/images/chat.svg' alt=''/>
                    <p> Minhas Conversas </p>
                </div>
                <div onClick={agendadasClick}>
                    <img src='/assets/images/calendar.svg' alt=''/>
                    <p>Consultorias Agendadas</p>
                </div>
                <div onClick={agendarClick}>
                    <img src='/assets/images/calendarplus.svg' alt=''/>
                    <p>Agendar Consultoria</p>
                </div>
            </div>
            <div onClick={sairClick} className='menu-lateral-sair'>
                <img src='/assets/images/sair.svg' alt=''/>
                <p >Sair</p>
            </div>
        </nav>
    );
}