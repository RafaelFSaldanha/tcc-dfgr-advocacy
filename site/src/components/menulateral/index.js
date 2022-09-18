import './index.scss'
import logodourada from '../../assets/images/logodourada.svg'
import Chat from '../../assets/images/chat.svg'
import { useNavigate } from 'react-router-dom'
import Calendar from '../../assets/images/calendar.svg'
import CalendarPlus from '../../assets/images/calendarplus.svg'
import Sair from '../../assets/images/sair.svg'
import storage from 'local-storage'

export default function Menulateral(){

    const navigate = useNavigate();

    async function sairClick(){
        storage.remove('usuario-logado');
        navigate('/advogado/login');
        
    }
    async function agendarClick(){
        
            navigate('/advogado/admin/agendarconsultoria');
        
    }

    return(
        <nav className="main-menu-lateral">
            <div className='logo'>
                <img src={logodourada}/>
            </div>

            <div className='menu-lateral-items'>
                <div >
                    <img src={Chat}/>
                    <p> Conversas </p>
                </div>
                <div>
                    <img src={Calendar}/>
                    <p>Consultorias Agendadas</p>
                </div>
                <div onClick={agendarClick}>
                    <img src={CalendarPlus} />
                    <p>Agendar Consultoria</p>
                </div>
            </div>
            <div onClick={sairClick} className='menu-lateral-sair'>
                <img src={Sair} />
                <p >Sair</p>
            </div>
        </nav>
    );
}