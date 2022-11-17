import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import { useState, useEffect } from 'react'

export default function MenulateralCliente(){

    const [id, setId] = useState(0) 
    const navigate = useNavigate();

    useEffect(() =>{
        const aaa = storage('cliente-logado')
        setId(aaa.id)
        console.log(aaa)
        }, [])

    async function sairClick(){
        storage.remove('cliente-logado');
        navigate('/login');
        
    }
    async function Associadosclick(){
        navigate('/associados');
    }

    async function Conversas(){
        
        navigate('/conversas');
        
    }
    async function Landing(){
        navigate('/');
        
    }

    async function agendadasClick(){
        
        navigate('/agendadas');
    
}

    return(
        <nav className="main-menu-lateral-cliente">
            <div className='logo'>
                <img onClick={Landing}src='/assets/images/logodourada.svg' alt=''/>
            </div>

            <div className='menu-lateral-items'>
                <div onClick={Conversas}>
                   <img src='/assets/images/chat.svg' alt=''/>
                    <p> Minhas Conversas </p>
                </div>
                <div onClick={agendadasClick}>
                <img src='/assets/images/calendar.svg' alt=''/>
                    <p>Consultorias Agendadas</p>
                </div>
                <div onClick={Associadosclick}>
                <img src='/assets/images/associados.svg' alt=''/>
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