import './index.scss';
import '../../common/common.scss';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { listarClientes } from '../../../api/ChatAPI';
import { ListarClientesChat } from '../../../api/Advogadoapi';
import storage from 'local-storage';

export default function ChatPage() {
    const [mensagem, setMensagem] = useState('');
    const [clientes, setClientes] = useState([]);
    const [mensagens, setMensagens] = useState([]);
    const [conversaId, setConversaId] = useState(-1);
    const [exibir, setExibir] = useState(0)
    const { idParam } = useParams();

    async function CarregarClientes() {
        const r = await listarClientes(idParam)
        setClientes(r)
    }
    const [clienteSelect, setClienteSelect] = useState(0)
    const [cliente, setCliente] = useState([])
    const navigate = useNavigate();
    async function listarClientesChat(id) {
        const r = await ListarClientesChat(id);
        setCliente(r)
    }
    useEffect(() => {
        const aaa = storage('advogado-logado')
        listarClientesChat(aaa.id);
    }, [])
    useEffect(() => {
        CarregarClientes()
    }, [])
    console.log(cliente)
    return (
        <main className="Chat-page">
            <header className='cabeca'> <img src='/assets/images/logodourada.svg' /> </header>
            <div className='content'>
                <nav className="main-menu-lateral">
                    <div className='menu-lateral-items'>
                        {clientes.map(item => <p><div onClick={() => {
                            setClienteSelect(item.idCliente)
                            console.log(item.idCliente)
                        }}> {item.nomeCliente.substr(0, 1)} </div> {item.nomeCliente} </p>)}
                    </div>
                </nav>
                <div className='chat-content'>
                    <header className='chat-header'>
                    </header>
                    <div className='chat-messages'>
                        {exibir === 0
                            ? <div></div>
                            : <div>{cliente.map(() => (
                                <div>
                                    <h1>Cliente NOME</h1>
                                </div>))}</div>
                        }
                    </div>
                    <div className='input-message'>
                        <input value={mensagem} type="text" onChange={e => setMensagem(e.target.value)} />
                        <img src='/assets/images/enviar.svg' />
                    </div>
                </div>
            </div>
        </main>
    );
}