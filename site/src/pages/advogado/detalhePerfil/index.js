import './index.scss';
import '../../common/common.scss';
import DetalhePerfil from '../../../components/detalheperfil/index'
import storage from 'local-storage';
import { useEffect, useState } from 'react';
import { AdvogadoId } from '../../../api/Advogadoapi';
import { useNavigate } from 'react-router-dom';

export default function PerfilAdvogado() {

    const[advogado,setAdvogado]= useState({})
    const navigate = useNavigate();

    async function carregar() {
        const Advogado = storage('advogado-logado')
        const r = await AdvogadoId(Advogado.id)
        setAdvogado(r)
    }

    useEffect(() =>{
        carregar();
        if(!storage('advogado-logado')){
            navigate('/advogado/login')
        }
    },[])

    function Agendadas() {
        navigate('/advogado/consultoriasagendadas')
    }

    return (
        <main className='detalhe-perfil'>
            <header>
                <img className='logo' src='/assets/images/logodourada.svg' alt=''/>
                <div className='conteudo-header'>
                    <a onClick={Agendadas}> Agendamentos </a>
                    <a> Conversas </a>
                </div>
            </header>
                <DetalhePerfil advogado={advogado}/>
        </main> 
    )
}