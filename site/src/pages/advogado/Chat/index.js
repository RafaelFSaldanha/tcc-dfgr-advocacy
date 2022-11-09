import './index.scss';
import '../../common/common.scss';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { listarClientes } from '../../../api/ChatAPI';
import SideBar from '../../../components/sideBarChat';


export default function ChatPage() {
    const [mensagem, setMensagem] = useState('')
    const [clientes, setClientes] = useState ([])
    const [mensagens, setMensagens] = useState([])
	const [conversaId, setConversaId] = useState(-1);
    const { idParam } = useParams();

    async function CarregarClientes() {
        const r = await listarClientes(idParam)
        setClientes(r)
    }

    useEffect(()=> {
        CarregarClientes()
        console.log(idParam)
    },[])

    return(
        <main classsName="Chat-page">
            <header className='cabeca'> <img src='/assets/images/logodourada.svg' /> </header>
            <div className='content'>
                <SideBar/>
                    <div className='chat-content'>
                        <header className='chat-header'>
                        {clientes.map ((item) => <p><div> D </div> {item.nome} </p>)}
                        </header>
                    <div className='chat-messages'>
                    </div>
                    <div className='input-message'>
                        <input value={mensagem} type="text" onChange={e => setMensagem(e.target.value)}/>
                        <img src='/assets/images/enviar.svg'/>
                    </div>
                </div>
            </div>
        </main>
    );
}