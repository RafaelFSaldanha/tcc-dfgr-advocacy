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
    const ref = useRef();

async function entrarClick(){
    ref.current.continuousStart();

    try{
        
        const r = await AdvogadoLogin(email, senha);
        Storage('usuario-logado', r)

        setTimeout(() => {
            navigate('/consultoria');
        }, 3000);
        
        }
<<<<<<< HEAD
    catch (err){
            ref.current.complete();
            if(err.response.status === 401){
                setErro(err.response.data.erro);
            } 
=======
    
    
        catch (err){
            if (err.response.status === 401) {
                setErro(err.response.data.erro)
            }
>>>>>>> 5251dd1ba714cb2240b44220eb6c48dde893896d
        }
}
    async function cadastrarClick(){
        ref.current.continuousStart();

        setTimeout(() => {
            navigate('/cadastro');
        }, 3500)
    }




    return(
        <main className='Login-main'>
            <LoadingBar color='#AD8217' ref={ref} />
            <div className='div-bg-main'>
                <img className='logo' src={logoDourada}/>
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

                    <button onClick={entrarClick}  className='entrar-button' >Entrar</button>

                    
                </div>
                <p className='cadastro-con'>Não tem uma conta ainda? <a onClick={cadastrarClick} > Cadastre-se </a></p>
            </div>
        </main>
    );
}