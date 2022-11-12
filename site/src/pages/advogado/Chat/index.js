import './index.scss';
import '../../common/common.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Await } from 'react-router-dom';
import { listarConversas } from '../../../api/ChatAPI';
import { ListarClientesChat } from '../../../api/Advogadoapi';
import storage from 'local-storage';
import io from "socket.io-client"

const socket = io.connect("http://localhost:5000")

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [clientes, setClientes] = useState([]);
    const [mensagens, setMensagens] = useState([]);
    const [idChat, setidChat] = useState(-1);
    const [exibir, setExibir] = useState(0)
    const { idParam } = useParams();
    const [cliente, setCliente] = useState([])
    const navigate = useNavigate();
    const aaa = storage('advogado-logado')

    async function ListarConversasProAdv() {
        const r = await listarConversas(aaa.id, null)
        setClientes(r)
        console.log(r)
    }

    async function ProcuparporId(id) {
        const r = await ListarClientesChat(id)
        setCliente(r)
        console.log(r)
    }

    async function EnviarMensagem() {
		socket.emit("enviarMensagem", {
			idChat: idChat,
			tipo: 2,
			idEnvio: aaa.id,
			message: mensagem,
		});
		socket.emit("receberMensagem,", {
      idChat: idChat,
    });
		setMensagem("");
	}

    function ParteMensagens(type) {
		if (type == 2) {
			return "msg-right";
    } else {
      return "msg-left"
    }
  }
	socket.on("receberMensagem", (data) => {
    setMensagens(data);
	});

   

    useEffect(() => {
        ListarConversasProAdv()
    }, [])

    
    return (
        <main className="Chat-page">
            <header className='cabeca'> <img src='/assets/images/logodourada.svg' /> </header>
            <div className='content'>
                <nav className="main-menu-lateral">
                    <div>
                        {clientes.map(item => (
                            <div className='menu-lateral-items' onClick={()=>{
                                setidChat(item.contatoId)
                                ProcuparporId(item.contatoId)
                                socket.emit("receberMensagem", {
                                    idChat: item.contatoId
                                });
                            }
                            }>
                            <div className=''>
                                <p className='p'><div>{item.nomeCliente}</div></p>
                            </div>
                            </div>
                        ))
                        }
            
                    </div>
                </nav>
                <div className='chat-content'>
                    <header className='chat-header'>
                    {cliente.map(item =>
                            <span>{item.nomeCLiente}</span>
                            )}
                    </header>
                    <div className='chat-messages'>
                    {mensagens &&
								mensagens.map((item) => {
									return <div className={ParteMensagens(item.tipo)}> <span className="message-text">{item.mensagem}</span> </div>;
								})}
                    </div>
                    <div className='input-message'>
                        <input value={mensagem} type="text" onChange={e => setMensagem(e.target.value)} />
                        {mensagem &&
                            <div onClick={()=> EnviarMensagem()}>
                                <img src='/assets/images/enviar.svg' />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}