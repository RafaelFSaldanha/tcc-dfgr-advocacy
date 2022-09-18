import './index.scss'
import logodourada from '../../assets/images/logodourada.svg'
import Chat from '../../assets/images/chat.svg'
import Calendar from '../../assets/images/calendar.svg'
import CalendarPlus from '../../assets/images/calendarplus.svg'
import Sair from '../../assets/images/sair.svg'

export default function Menulateral(){
    return(
        <nav className="main-menu-lateral">
            <div className='logo'>
                <img src={logodourada}/>
            </div>

            <div className='menu-lateral-items'>
                <div>
                    <img src={Chat}/>
                    <p> Conversas </p>
                </div>
                <div>
                    <img src={Calendar}/>
                    <p>Consultorias Agendadas</p>
                </div>
                <div>
                    <img src={CalendarPlus}/>
                    <p>Agendar Consultoria</p>
                </div>
            </div>
            <div className='menu-lateral-sair'>
                <img src={Sair} />
                <p>Sair</p>
            </div>
        </nav>
    );
}