import './index.scss';
import '../../common/common.scss';
import {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom'
import logoDourada from '../../../assets/logodourada.svg'
import LoadingBar from 'react-top-loading-bar'
import { AdvogadoLogin } from '../../../api/Advogadoapi';
import Storage from 'local-storage'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('');

    const navigate = useNavigate();


async function sim(){
    try{
        const r = await AdvogadoLogin(email, senha);
        Storage('usuario-logado', r)

        setTimeout(() => {
            navigate('/consultoria');
        }, 1000);
        
        }
    catch (err){
            
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            } 
        }
}




    return(
        <main className='Login-main'>
            <LoadingBar color='#000000' />
            <div className='div-bg-main'>
                <img className='logo' src={logoDourada}/>
                <div className='div-bg-input'>
                   <div className='input-email'>
                    <p>Email<span> *</span></p>
                    <input value={email} type='email' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='input-senha'>
                    <p>Senha <span> *</span></p>
                    <input value={senha} type='password' onChange={e => setSenha(e.target.value)}/>
                    </div>
                    <div className='error'>
                        {erro}
                        </div>
                </div>
                <div className='div-bg-button'>

                    <button onClick={sim} className='entrar-button'>Entrar</button>

                    
                </div>
                <p></p>
            </div>
        </main>
    );
}