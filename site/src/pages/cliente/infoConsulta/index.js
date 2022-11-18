import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { InfoCliente } from "../../../api/Advogadoapi"
import Card from '../../../components/InfopraCliente/index'
import './index.scss'
import '../../common/common.scss'



export default function Index(){

    const[consulta, setConsulta]= useState({})
    const{idParam}= useParams()
    const navigate = useNavigate()

    async function Listar() {
        const r = await InfoCliente(idParam)
        setConsulta(r)
    }

    function navegar() {
        navigate('/agendadas')
    }

    useEffect(()=>{
        Listar()
    
    },[])


    return(
        <main className="main">
            <header className="header">
            <img src="/assets/images/logodourada.svg" alt="" />
                <div className='links'>
    
                    <a onClick={navegar} className="link" href="/agendadas"> Voltar </a>
                 
                </div>
            </header>

            <section className="sec1">
                <div>
                    <Card consulta={consulta}/>
                </div>
            </section>
        </main>
    )
}