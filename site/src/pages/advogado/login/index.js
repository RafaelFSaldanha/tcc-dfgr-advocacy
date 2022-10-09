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
        if(storage('usuario-logado')){
            navigate('/advogado/home')
        }
    }, [])
    async function entrarClick(){
    ref.current.continuousStart();

    try{
        

        const r = await AdvogadoLogin(email, senha);
        storage('usuario-logado', r)

        setTimeout(() => {
            navigate('/advogado/home');
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

    async function cadastrarClick(){
        ref.current.continuousStart();

        setTimeout(() => {
            navigate('/cadastro/advogado');
        }, 3500)
    }




    return(
        // <main className='Login-main'>
        //     <LoadingBar color='#AD8217' ref={ref} />
        //     <div className='div-bg-main'>
        //         <img className='logo' src='/assets/images/logodourada.svg'/>
        //         <div className='div-bg-input'>
        //            <div className='input-email'>
        //             <p>Email<span> *</span></p>
        //             <input value={email} type='email'placeholder='Insira seu email' onChange={e => setEmail(e.target.value)} />
        //             </div>
        //             <div className='input-senha'>
        //             <p>Senha <span> *</span></p>
        //             <input value={senha} type='password' placeholder='*********' onChange={e => setSenha(e.target.value)}/>
        //             </div>
                
<<<<<<< HEAD
                </div>
                <div className='error'>
                        {erro}
                </div>
                <div className='div-bg-button'>

                    <button onClick={entrarClick}  className='entrar-button'>Entrar</button>
=======
        //         </div>
        //         <div className='error'>
        //                 {erro}
        //                 </div>
        //         <div className='div-bg-button'>

        //             <button onClick={entrarClick}  className='entrar-button' >Entrar</button>
        //             <p className='cadastro-con'>Não tem uma conta ainda? <a onClick={cadastrarClick} > Cadastre-se </a></p>
>>>>>>> 22cf5f85eb41627e69af07a3a79de785f24caa97

                    
        //         </div>
               
        //     </div>
        // </main>

        <main className='tela-login'>
            <LoadingBar color='#AD8217' ref={ref} />
            <div className='div-principal'>
                <img src='/assets/images/logodourada.svg'/>
                <div className='div-inputs'>
                    <div className='div-input'>
                        <p>Email<span> *</span></p>
                        <input value={email} type='email'placeholder='Insira seu email' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='div-input'>
                        <p>Senha <span> *</span></p>
                        <input value={senha} type='password' placeholder='*********' onChange={e => setSenha(e.target.value)}/>
                    </div>
                </div>
                <div className='error'>
                    {erro}
                </div>
                <button onClick={entrarClick}  className='entrar-button' >Entrar</button>
                <p className='cadastro-con'>Não tem uma conta ainda? <a onClick={cadastrarClick} > Cadastre-se </a></p>
            </div>
        </main>
)}
