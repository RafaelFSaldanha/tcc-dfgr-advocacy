import './index.scss';
import '../../common/common.scss';
import {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import { AdvogadoLogin } from '../../../api/Advogadoapi';
import storage from 'local-storage'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('');

    const navigate = useNavigate();
    const ref = useRef(); 


    useEffect(() =>{
        if(storage('advogado-logado')){
            navigate('/advogado/home')
        }
    }, [])
    async function entrarClicke(){
    ref.current.continuousStart();

    try{
        

        const r = await AdvogadoLogin(email, senha);
        storage('advogado-logado', r)

        setTimeout(() => {
            navigate('/advogado/home');
            ref.current.complete();
        }, 1000);
        
        
        }

    catch (err){
            ref.current.complete();

            if (err.response.status === 401 ) {
                if (err.response.data.erro === "Senha ou E-mail incorretos.") {
                setErro(err.response.data.erro);
            }
        }
        }
    }

    async function cadastrarClick(){
        ref.current.continuousStart();

        setTimeout(() => {
            navigate('/advogado/cadastro');
        }, 1)
    }
    async function clienteClick(){
        ref.current.continuousStart();

        setTimeout(() => {
            navigate('/cadastro');
        }, 1)
    }




    return(
        <main className='tela-login'>
            <LoadingBar color='#AD8217' ref={ref} />
            <div className='div-bg-main'>
                <img className='logo' src='/assets/images/logodourada.svg' alt=''/>
                <div className='div-bg-input'>
                <div className='input-email'>
                    <p>Email<span> *</span></p>
                    <input value={email} type='email'placeholder='Insira seu email' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='input-senha'>
                    <p>Senha <span> *</span></p>
                    <input value={senha} type='password' placeholder='*********' onChange={e => setSenha(e.target.value)}/>
                    </div>
                </div>
                <div className='error'>
                        {erro}
                        </div>
                <div className='div-bg-button'>
                    <button  onClick={entrarClicke} className='entrar-button' >Entrar</button>
                    <p className='cadastro-con'>Torne-se um de nós!  <a onClick={cadastrarClick}> Cadastre-se Agora</a></p>
                    <p className='cadastro-con'>Quer ser apenas um cliente?<a onClick={clienteClick}> Clique aqui</a></p>
                
                </div>
            </div>
    </main>
)}
