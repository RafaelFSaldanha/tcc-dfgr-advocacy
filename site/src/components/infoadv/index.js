import './index.scss';
import '../../pages/common/common.scss';
import { Advogadosid2, buscarfoto } from '../../api/Advogadoapi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




export default function Index(){

    const[advogado, setAdvogado]= useState([])
    const{idParam}= useParams()

    const navigate = useNavigate();

    async function chatClick() {
        navigate('/conversas');
    }

    async function Carregar() {
        const r = await Advogadosid2(idParam)
        setAdvogado(r)
        console.log(r)
    }

    useEffect(()=> {
        Carregar()
    },[])

    return(
        <main className="main-bla">
            {advogado.map(item=>
                <div className='div-mae'>
                <div className='div-img'>
                {!item.foto &&
                    <img className="img" src="/assets/images/semfoto.png" alt="" />
                }
                {item.foto &&
                    <img className='img' src= {buscarfoto(item.foto)} alt='' />    
                }
                </div>
                <div className='container-aa'>
                    <div className='container'>
                        <div className='div'>
                            <p className='titulo'>Nome:</p>
                            <p className='conteudo'>{item.nome}</p>
                        </div>
                        <div className='div'>
                            <p className='titulo'>Contato:</p>
                            <p className='conteudo'>{item.email}</p>
                            <p className='conteudo'>{item.tel}</p>
                        </div>
                        <div className='div'>
                            <p className='titulo'>Escritório:</p>
                            <p className='conteudo'>{item.local}</p>
                        </div>
                        <div className='div'>
                            <p className='titulo'>Áreas de atuação:</p>
                            <p className='conteudo'>{item.area}</p>
                        </div>
                    </div>
                    <div className='container2'>
                        <div className='div'>
                            <p className='titulo'>Descrição:</p>
                            <p className='conteudo'>{item.descricao}</p>
                        </div>
                        <div className='Chat-div'> <h1>Para iniciar uma conversa com esse profissional <span onClick={chatClick}> clique aqui </span></h1></div>
                    </div>
                </div>
            </div>
                )}
                
        </main>
    )


}
