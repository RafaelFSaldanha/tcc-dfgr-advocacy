import '../../common/common.scss'
import './index.scss'
import {useState, useRef, useEffect} from 'react';
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom'
import { AdminLogin } from '../../../api/Advogadoapi';
import storage from 'local-storage'

export default function Index() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('');

    const navigate = useNavigate();
    const ref = useRef(); 

    useEffect(() =>{
        if(storage('admin-logado')){
            navigate('/admin/home')
        }
    }, [])
    async function entrarClick(){
    ref.current.continuousStart();

    try{
        

        const r = await AdminLogin(email, senha);
        storage('admin-logado', r)

        setTimeout(() => {
            navigate('/admin/home');
            ref.current.complete();
        }, 3000);
        
        
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
    return (
        <main className='Login-main'>
            <LoadingBar color='#AD8217' ref={ref} />
        <div className='div-bg-main'>
            <img className='logo' src='/assets/images/logodourada.svg' alt=''/>
            <div className='div-bg-input'>
               <div className='input-email'>
                <p>Email<span> *</span></p>
                <input value={email} type='email' placeholder='Insira seu email' onChange={e=> setEmail(e.target.value)}/>
                </div>
                <div className='input-senha'>
                <p>Senha <span> *</span></p>
                <input value={senha} type='password' placeholder='*********' onChange={e=> setSenha(e.target.value)}/>
                </div>
            </div>
            <div className='error'>
                {erro}
            </div>
            <div className='div-bg-button'>
                <button onClick={entrarClick} className='entrar-button' >Entrar</button>
            </div>
        </div>
    </main>
    )
}