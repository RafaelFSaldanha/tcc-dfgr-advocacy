import './index.scss'
import '../../common/common.scss';
import  {useState} from 'react'
import storage from 'local-storage';
import { ConsultoriasId } from '../../../api/Advogadoapi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




export default function Index() {
   
    const[card, setCard]= useState([])

    const navigate= useNavigate()

    async function Listar(){
        const cliente = storage('cliente-logado')
        
        const r = await ConsultoriasId(cliente.idCliente)

        setCard(r)
    }

    useEffect(()=>{
        Listar();
        
    },[])

    function Info(id) {
        navigate(`/consultoria/${id}`)
    }



    return (
        <main className='info-adv'>
            <header className='header-consultar'>
                <img src="/assets/images/logodourada.svg" alt="" />
                <div className='div-links'>
                    <a className='link' href="/home"> Voltar ao perfil </a>
                    <a className='link' href="/"> Início </a>
                </div>
            </header>
            <div className='div-geral-1'>
                <p className='consulo-agendadas'> Consultorias agendadas </p>
                <div className='div-tit'>
                    <div className='div-ind'>
                        <p>Tipo de Consultoria</p>
                    </div>
                    <div className='div-ind'>
                        <p>Advogado</p>
                    </div>
                    <div className='div-ind'>
                        <p>Data e Hora</p>
                    </div>
                    <div className='div-ind'>
                        <p>Email</p>
                    </div>
                </div>
                
                {card.map(item=>
                    <div onClick={()=> Info(item.id)} className='div-consultar'>
                        <div className='div-ind'>
                            <p>{item.area}</p>
                        </div>
                        <div className='div-ind'>
                            <p>{item.advogado}</p>
                        </div>
                        <div className='div-ind'>
                            <p>{item.dia.substr(0,10)}  | {item.hora.substr(0,5)}</p>
                        </div>
                        <div className='div-ind'>
                            <p>{item.email}</p>
                        </div>
                        
                    </div>
                    )
                    
                    }

                    


            </div>
            
        </main>
    )
}