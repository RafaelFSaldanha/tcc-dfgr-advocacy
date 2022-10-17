import { useState } from "react"
import { buscarfoto } from "../../api/Advogadoapi"



export default function Index(props){

    return(
        <div className='div-principal'>
                <h1> Meu Perfil </h1>
                <div className='conteudo'>
                    <div className='div-foto'>
                        <img className='foto' src= {buscarfoto(props.advogado.foto)} alt='' />
                    </div>
                    <div className='principal-conteudo'>
                        <div className='conteudo-adv'>
                            <div className='div-conteudo'>
                                <div className='individual'>
                                    <p className='p-titulo'> Nome: </p>
                                    <p> {props.advogado.nome} </p>
                                </div>
                                <div className='individual'>
                                    <p className='p-titulo'> Contato: </p>
                                    <p> {props.advogado.email} </p>
                                    <p> {props.advogado.tel} </p>
                                </div>
                                <div className='individual'>
                                    <p className='p-titulo'> Localização: </p>
                                    <p> {props.advogado.local} </p>
                                </div>
                                <div className='individual'>
                                    <p className='p-titulo'> Número da OAB: </p>
                                    <p> {props.advogado.oab} </p>
                                </div>
                            </div>
                            <div className='div-conteudo'>
                                <div className='individual'>
                                    <p className='p-titulo'> Áreas de atuação: </p>
                                    <p> {props.advogado.area} </p>
                                </div>
                        
                            </div>
                        </div>
                        <div className='div-lapis'>
                            <img src='/assets/images/edit-perfil.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
    )
}