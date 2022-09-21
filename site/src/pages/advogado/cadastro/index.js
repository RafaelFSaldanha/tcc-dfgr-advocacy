import './index.scss';
import '../../common/common.scss';
import logoDourada from '../../../assets/images/logodourada.svg'
import {useState, useRef, useEffect} from 'react';
import LoadingBar from 'react-top-loading-bar'
import storage from 'local-storage'



export default function CadastroAdvogado(){

    const [nome, setNome] = useState('')
    const [estado, setEstado] = useState('')
    const [oab, setOab] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return(
       <main className='cadastro-advogado'>
        <div className='div-bg-main'>
               <img className='logo' src={logoDourada} />
                <div className='div-bg-input'>
                   <div className='input'>
                    <p>Email<span> *</span></p>
                    <input value={nome} type='text'placeholder='Insira seu nome completo' onChange={e => setNome(e.target.value)} />
                    </div>

                    <div className='input'>
                    <p> Estado de Atuação <span> *</span></p>
                    <input value={estado} type='text' placeholder='Insira o seu estado de atuação' onChange={e => setEstado(e.target.value)}/>
                    </div>

                    <div className='input'>
                    <p>Número do OAB <span> *</span></p>
                    <input value={oab} type='text' placeholder='Insira o número do seu OAB' onChange={e => setOab(e.target.value)}/>
                    </div>

                    <div className='input'>
                    <p> Telefone <span> *</span></p>
                    <input value={telefone} type='text' placeholder='Insira seu telefone' onChange={e => setTelefone(e.target.value)}/>
                    </div>

                    <div className='input'>
                    <p> Email <span> *</span></p>
                    <input value={email} type='email' placeholder='Insira seu email' onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='input'>
                    <p>Senha <span> *</span></p>
                    <input value={senha} type='password' placeholder='*********' onChange={e => setSenha(e.target.value)}/>
                    </div>
                   
                </div>
                <div className='div-bg-button'>
                        <button className='cadastrar-button'> Cadastrar-se </button>
                    </div>
                    <p className='entrar-con'>Já possui uma conta? <a > Entrar </a></p>
                </div>
       </main>
)}
