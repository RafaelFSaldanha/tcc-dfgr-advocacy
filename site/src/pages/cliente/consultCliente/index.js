import './index.scss'
import '../../common/common.scss';
import  {useState} from 'react'
import storage from 'local-storage';
import { ConsultoriasId } from '../../../api/Advogadoapi';
import { useEffect } from 'react';


export default function Index() {

    const[card, setCard]= useState([])

    async function Listar(){
        const cliente = storage('cliente-logado')
        
        const r = await ConsultoriasId(cliente.id)

        setCard(r)
        console.log(card)
    }

    useEffect(()=>{
        Listar();
    },[])


    return (
        <main className='info-adv'>
            <header className='header-consultar'>
                <img src="/assets/images/logodourada.svg" alt="" />
                <div className='div-links'>
                    <a href="/home"> Voltar ao perfil </a>
                    <a href="/"> Início </a>
                    <img src="/assets/images/config.png" alt="" />
                </div>
            </header>
            <div className='div-geral'>
                <h1> Consultorias agendadas </h1>
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
                    <div className='div-consultar'>
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
                    )}

            </div>
        </main>
    )
}