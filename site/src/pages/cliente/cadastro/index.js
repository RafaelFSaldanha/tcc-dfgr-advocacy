import '../../common/common.scss'
import './index.scss'
import { CadastrarCliente } from '../../../api/Advogadoapi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Index() {
    
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const navigate= useNavigate();
    


    async function cadastrare(){
        try {
            const r = await CadastrarCliente(nome, email, senha);
            toast.success('Cadastro feito com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        } catch (err) {
            toast.error(err.response.data.erro)
        }
    }
    
    function navegar(){
        navigate('/login')
    }
    function navegaradv(){
        navigate('/advogado/login')
    }
    
    
    return (
        <main className='tela-cadastro'>
            <ToastContainer 
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"/>
            <div className='div-cadastro'>
                <img className='logo' src='/assets/images/logodourada.svg' alt=''/>
                <div className='div-inputs'>
                    <div className='individual'>
                        <p className='nome-input'> Nome <span>*</span></p>
                        <input value={nome} type='text' className='input' placeholder='Insira seu nome completo' onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div className='individual'>
                        <p className='nome-input'> Email <span>*</span></p>
                        <input value={email} type='text' className='input' placeholder='Insira um email válido' onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div className='individual'>
                        <p className='nome-input'> Senha <span>*</span></p> 
                        <input value={senha} type='password' className='input' placeholder='********' onChange={e => setSenha(e.target.value)} />
                    </div>
                </div>
                <div className='final'>
                    <button onClick={cadastrare} className='botao-entrar'>
                        Cadastrar
                    </button>
                    <p className='frase-final'> Já possui uma conta? <span onClick={navegar} className='span-final'> Entrar </span></p>
                    <p className='frase-final'> Quer ser um de nossos associados? <span onClick={navegaradv} className='span-final'> Clique Aqui </span></p>
                </div>
            </div>
        </main>
    )
}