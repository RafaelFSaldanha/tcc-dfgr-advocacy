import './index.scss';
import '../../common/common.scss';
import DetalhePerfil from '../../../components/detalheperfil/index'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AdvogadoId } from '../../../api/Advogadoapi';

export default function PerfilAdvogado() {

    const[advogado,setAdvogado]= useState({})
    const {idParam}= useParams();

    async function carregar() {
        const r = await AdvogadoId(idParam)
        setAdvogado(r)
    }

    useEffect(() =>{
        carregar();
        console.log(advogado)
    },[])

    return (
        <main className='detalhe-perfil'>
            <header>
                <img className='logo' src='/assets/images/logodourada.svg' alt=''/>
                <div className='conteudo-header'>
                    <a> Agendamentos </a>
                    <a> Conversas </a>
                    <img src='/assets/images/home.png' alt='' />
                </div>
            </header>
                <DetalhePerfil advogado={advogado}/>
        </main> 
    )
}