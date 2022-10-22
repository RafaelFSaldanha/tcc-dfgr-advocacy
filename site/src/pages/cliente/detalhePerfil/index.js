import './index.scss'
import '../../common/common.scss'
import {useEffect, useState} from 'react'
import { ClienteId, buscarfoto } from '../../../api/Advogadoapi'
import storage from 'local-storage'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Index() {

    const[info, setInfo]= useState([])

    const navigate=useNavigate();

    async function AA() {
        const cliente=storage('cliente-logado')
        const  r= await ClienteId(cliente.id)
        setInfo([r])
        console.log(r)
        
    }

    useEffect(()=>{
        AA()
    },[])

    function VoltarPerfil() {
        navigate('/home')
    }
    function VoltarInicio() {
        navigate('/')
    }


    return (
        <main className='info-adv'>
            <header>
                <img src="/assets/images/logodourada.svg" alt="" />
                <div className='div-links'>
                    <img onClick={VoltarPerfil} src="/assets/images/Account circle.png" alt="" />
                    <img onClick={VoltarInicio} src="/assets/images/home.png" alt="" />
                </div>
            </header>
            
            {info.map(item=>
                <div className='div-geral'>
                <div>
                    <div className='div-1'>
                        <div className='div-img'>
                            {!item.foto &&
                            <img src="/assets/images/semfoto.png" alt="" />
                            }
                            {item.foto &&
                            <img src={buscarfoto(item.foto)} alt="" />
                            }
                        </div>
                        <div className='div-cont'>
                            <div className='div-cont-1'>
                                <div className='individual'>
                                    <p className='p-t'>Nome:</p>
                                    <p className='p-p'>{item.nome}</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Email:</p>
                                    <p className='p-p'>{item.email}</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Telefone:</p>
                                    <p className='p-p'>{item.tel}</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Localização:</p>
                                    <p className='p-p'>{item.localizacao}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-edit'>
                        <img src="/assets/images/edit-perfil.png" alt="" />
                    </div>
                </div>
            </div>
                )}
    
        </main>
    )
}