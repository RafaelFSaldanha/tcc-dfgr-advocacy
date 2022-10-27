import MenuLateral from '../../../components/menulateral/index.js';
import Cabecalho from '../../../components/cabecalho/index.js';
import Detalhe from '../../../components/detalhe/index.js';
import './index.scss';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Informaçoes } from '../../../api/Advogadoapi.js';


export default function Index() {
    
    const [consultoria, setConsultoria]= useState({})
    const {idParam}= useParams();

    useEffect(() =>{
        carregarInformaçoes();
        console.log(idParam)
    },[])

    async function carregarInformaçoes() {
        const r = await Informaçoes(idParam)
        setConsultoria(r)
    }

    return (
        <main className='consultorias-agendadas'>
            <MenuLateral />
            <div className='div-principal'>
                <Cabecalho />
                <div>
                    <Detalhe consultoria={consultoria}/>
                </div>
                
            </div>
        </main>
    );
}