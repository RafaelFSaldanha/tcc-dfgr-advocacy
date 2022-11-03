import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { buscarfoto } from "../../api/Advogadoapi"
import { API_URL } from '../../api/config.js'


export default function Index(props){

    const navigate=useNavigate()
    const[imagem,setImagem] = useState()

    function Editar() {
        navigate('/advogado/editarperfil')
    }

    function MostrarImagem(){
        if(typeof (imagem) === 'object'){
            return URL.createObjectURL(imagem);
        }

        else if (typeof (imagem) === 'string'){
            return `${API_URL}/${imagem}` 
        }
        else{
            return buscarfoto(imagem);
        }
    }
    useEffect(() =>{
        console.log(props.advogado)
        setImagem(props.advogado.foto)
        if(imagem){
        MostrarImagem()
        }
        
    })

    return(
        <div className='div-principal'>
                <h1> Meu Perfil </h1>
                <div className='conteudo'>
                    <div className='div-foto'>
                        {!imagem &&
                        <img className="foto" src="/assets/images/semfoto.png" alt="" />
                        }
                        {imagem &&
                        <img className='foto' src= {MostrarImagem()} alt='' />    
                        }
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

                                <div className='individual'>
                                    <p className='p-titulo'> Descriçao: </p>
                                    <p> {props.advogado.descricao} </p>
                                </div>
                        
                            </div>
                        </div>
                        <div className='div-lapis'>
                            <img onClick={Editar} src='/assets/images/edit-perfil.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
    )
}