import './index.scss';
import '../../pages/common/common.scss';
import { Advogadosid2, buscarfoto} from '../../api/Advogadoapi';
import { iniciarChat } from '../../api/ChatAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Index(){

    const[advogado, setAdvogado]= useState([])
    const{ idParam }= useParams()
    const [id, setId] = useState(0)

    const navigate = useNavigate();
    const aaa = storage('cliente-logado')

   async function chatClick() {
        navigate('/conversas')
        const r = await iniciarChat(id, idParam)
   }
    async function Carregar() {
        const r = await Advogadosid2(idParam)
        setAdvogado(r)
    }

    useEffect(()=> {
        Carregar()
        setId(aaa.idCliente)
        
    },[])

    return(
        <main className="main-bla">
             <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{width: '16em'}}/>
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