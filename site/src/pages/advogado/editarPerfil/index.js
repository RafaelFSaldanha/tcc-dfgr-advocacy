import '../../common/common.scss'
import './index.scss'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AdvogadoId, EditPerfil } from '../../../api/Advogadoapi'

export default function EditarPerfil() {
    const [nome,setNome]= useState('');
    const [area,setArea]= useState(0);
    const [email,setEmail]= useState('');
    const [localizacao,setLocalizacao]= useState('');
    const [telefone,setTelefone]= useState('');
    const [id,setId]= useState(0);
    const {idParam}= useParams()

    useEffect(()=>{
        if(idParam){
            carregaradvogado();
        }
        
    },[])

    function carregaradvogado() {
        const r= AdvogadoId(idParam);
        setNome(r.nome)
        setArea(r.area)
        setEmail(r.email)
        setLocalizacao(r.localizacao)
        setTelefone(r.telefone)
        setId(r.id)
        
        
    }

    async function Alterar() {
        const r= await EditPerfil(id, nome, area, email,localizacao, telefone)
    }


    return (
        <main className='editar-perfil'>
            <header>
                <img src='/assets/images/logodourada.svg' alt='' />
            </header>
            <div className='div-principal'>
                <div className='conteudo'>
                    <div className='div-geral'>
                        <div className='div-upload'>
                            <img src='/assets/images/upload.png' alt='' />
                        </div>
                        <div className='div-info1'>
                            <div>
                                <p> Nome: </p>
                                <input value={nome} type='text' />
                            </div>
                            <div>
                                <p> Email: </p>
                                <input value={email} type='email' />
                            </div>
                            <div>
                                <p> Telefone: </p>
                                <input value={telefone} type='number' />
                            </div>
                            <div>
                                <p> Localização: </p>
                                <input value={localizacao} type='text' />
                            </div>
                            <div>
                                <p> Áreas de atuação: </p>
                                <input value={area} type='text' />
                            </div>
                        </div>
                        <div className='div-info2'>
                            <p> Descrição: </p>
                            <textarea type='text' />
                        </div>
                    </div>
                    <div className='div-check'>
                        <img src='/assets/images/check.png' alt='' />
                    </div>
                </div>
            </div>
        </main>
    )
}