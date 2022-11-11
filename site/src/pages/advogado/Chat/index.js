import './index.scss';
import '../../common/common.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { listarClientes } from '../../../api/ChatAPI';
import { ListarClientesChat } from '../../../api/Advogadoapi';
import storage from 'local-storage';
import io from "socket.io-client"

const socket = io.connect("http://localhost:5000")

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [clientes, setClientes] = useState([]);
    const [mensagens, setMensagens] = useState([]);
    const [conversaId, setConversaId] = useState(-1);
    const [exibir, setExibir] = useState(0)
    const { idParam } = useParams();
    const [cliente, setCliente] = useState([])
    const navigate = useNavigate();
    const aaa = storage('advogado-logado')

    async function listarClientesChat() {
        const r = await ListarClientesChat(aaa.id);
        setClientes(r)
    }

    async function EnviarMensagem() {
		socket.emit("enviarMensagem", {
			contatoId: conversaId,
			tipo: 2,
			idEnvio: aaa.id,
			mensagem: mensagem,
		});
		socket.emit("receberMensagem,", {
      contato: conversaId,
    });
		setMensagem("");
        console.log(mensagens)
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
        listarClientesChat()
    }, [])

    
    return (
        <main className="Chat-page">
            <header className='cabeca'> <img src='/assets/images/logodourada.svg' /> </header>
            <div className='content'>
                <nav className="main-menu-lateral">
                    <div className='menu-lateral-items'>
                        {clientes.map(item => <p><div onClick={() => {
                            setConversaId(item.idCliente)
                            
                            socket.emit("receberMensagem", {
                                contato: item.idCliente
                            })
                            console.log(item.idCliente)
                        }}> {item.nomeCliente.substr(0, 1)} </div> {item.nomeCliente} </p>)}
                    </div>
                </nav>
                <div className='chat-content'>
                    <header className='chat-header'>
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