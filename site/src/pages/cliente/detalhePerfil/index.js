import './index.scss'
import '../../common/common.scss'
import {useEffect, useState, useParams} from 'react'
import { ClienteId, buscarfoto } from '../../../api/Advogadoapi'
import storage from 'local-storage'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Index() {

    const[info, setInfo]= useState([])

    const navigate=useNavigate();

    async function AA() {
        const cliente = storage('cliente-logado')
        const  r= await ClienteId(cliente.idCliente)
        setInfo([r])
        console.log(r)
        
    }
    function EditarClick(){
        navigate('/editarperfil')
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
                <img className='imagem' src="/assets/images/logodourada.svg" alt="" />
                <div className='div-links'>
                    <p className='link' onClick={VoltarPerfil}>Perfil</p>
                    <p className='link' onClick={VoltarInicio}>Início</p>
                </div>
            </header>
            
            {info.map(item=>
            <div className='div-geral-detalheperfil'>
                <div className='div'>
                    <h1 className='meu-perfil-h1'>Meu Perfil</h1>
                    <div className='div-1'>
                        <div className='div-img'>
                            {!item.foto &&
                            <img className='fotoperfil' src="/assets/images/semfoto.png" alt="" />
                            }
                            {item.foto &&
                            <img className='fotoperfil' src={buscarfoto(item.foto)} alt="" />
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
                                    <p className='p-p'>{item.local}</p>
                                </div>
                            </div>
                        </div>
                        <div className='div-edit'>
                            <img onClick={EditarClick} src="/assets/images/edit-perfil.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
                )}
        </main>
    )
}