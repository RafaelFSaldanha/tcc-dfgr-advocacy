
import '../../common/common.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { listarConversas } from '../../../api/ChatAPI';
import { ListarClientesChat } from '../../../api/Advogadoapi';
import storage from 'local-storage';
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000")

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [advogados, setAdvogados] = useState([]);
    const [mensagens, setMensagens] = useState([]);
    const [idChat, setidChat] = useState(-1);
    const [advogado, setAdvogado] = useState([])
    const navigate = useNavigate();
    const aaa = storage('cliente-logado')

    document.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			const btn = document.querySelector("#send");
			btn.click();
		}
	});

    async function ListarConversasProAdv() {
        const r = await listarConversas(null, aaa.idCliente)
        setAdvogados(r)
        
    }

    async function ProcuparporId(idCliente) {
        const r = await ListarClientesChat(idCliente)
        setAdvogado(r)

    }

    async function EnviarMensagem() {
        socket.emit("send_message", {
            idChat: idChat,
            tipo: 1,
            idEnvio: aaa.idCliente,
            mensagem: mensagem,
        });
        socket.emit("receive_message", {
            idChat: idChat,
        });
        setMensagem("");
    }

    function ParteMensagens(tipo) {
        if (tipo === 1) {
            return "msg-right";
        } else {
            return "msg-left"
        }
    }

    socket.on("receive_message", (data) => {
        setMensagens(data);
        console.log(mensagens)
    });



    useEffect(() => {
        ListarConversasProAdv()
    })

    function navegar() {
        navigate('/home')
    }

    return (
        <main className="Chat-page">
            <header className='cabeca'>
                <div className='cabeca-div'>
                <img src='/assets/images/logodourada.svg' /> <p onClick={navegar} className='p-cabeca'>Voltar</p>
                </div>
            </header>
            <div className='content'>
                <nav className="main-menu-lateral">
                    <div>
                        {advogados.map(item => (
                            <div className='menu-lateral-items' onClick={() => {
                                setidChat(item.contatoId)
                                ProcuparporId(item.contatoId)
                                socket.emit("receive_message", {
                                    idChat: item.contatoId
                                });
                            }
                            }>
                                <div className=''>
                                    <div className='bolinha'>{item.nomeAdvogado.substr(0,1)}</div><p className='p'><div>{item.nomeAdvogado.substr(0, 15)}...</div></p>
                                </div>
                            </div>
                        ))
                        }

                    </div>
                </nav>
                <div className='chat-content'>
                    <header className='chat-header'>
                        {advogado.map(item =>
                            <div className='info'>
                                <p>{item.nomeAdvogado}</p>
                            </div>
                        )}
                    </header>
                    <div className='chat-messages'>
                        {mensagens &&
                            mensagens.map((item) => {
                                return <div className={ParteMensagens(item.TipoEnvio)}> <span className="message-text">{item.mensagem}</span> </div>;
                            })}
                    </div>
                    <div className='input-message'>
                        {idChat !== -1 && (
                            <div className='aaa-div'>
                                <textarea value={mensagem} onChange={e => setMensagem(e.target.value)} />
                                {mensagem &&
                                    <div id="send" className='foto-enviar' onClick={() => EnviarMensagem()}>
                                        <img className='foto' src='/assets/images/enviar.svg' />
                                    </div>
                                }
                            </div>

                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}