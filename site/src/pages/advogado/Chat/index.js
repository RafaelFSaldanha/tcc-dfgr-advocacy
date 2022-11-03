import './index.scss';
import '../../common/common.scss';
import { useState } from 'react';
import SideBar from '../../../components/sideBarChat';


export default function ChatPage() {
    const [mensagem, setMensagem] = useState('')
    const [mensagens, setMensagens] = useState([])

    return(
        <main classsName="Chat-page">
            <header className='cabeca'> <img src='/assets/images/logodourada.svg' /> </header>
            <div className='content'>
                <SideBar/>
                    <div className='chat-content'>
                        <header className='chat-header'>
                        <p> <div> D </div> Diego Silva Dias</p>
                        </header>
                    <div className='chat-messages'>
                    </div>
                    <div className='input-message'>
                        <input type="text" />
                        <img src='/assets/images/enviar.svg'/>
                    </div>
                </div>
            </div>
        </main>
    );
}