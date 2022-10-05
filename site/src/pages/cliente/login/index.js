import '../../common/common.scss'
import './index.scss'
import { ClienteLogin } from '../../../api/Advogadoapi'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

export default function Index() {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('');
    
    const navigate= useNavigate();
    const ref = useRef();

    async function entrarClick(){

    
        try{
            
            const r = await ClienteLogin(email, senha);
            storage('usuario-logado', r)
    
            setTimeout(() => {
                navigate('/landingpage');
            }, 3000);
            
            }
    
        catch (err){

                if(err.response.status === 401){
                    setErro(err.response.data.erro);
                } 
            }
        }

    async function navegar(){
        navigate('/cadastro/usuario')
    }
    
    return (
        <main className='tela-login'>
            <div className='div-login'>
                <img className='logo' src='../../../public/assets/images/logodourada.svg' alt='logo' />
                <div className='div-inputs'>
                    <p className='nome-input'> Email </p>
                    <input value={email} type='text' className='input' placeholder='Insira seu email' onChange={e => setEmail(e.target.value)}/>
                    <p className='nome-input'> Senha </p> 
                    <input value={senha} type='text' className='input' placeholder='****' onChange={e => setSenha(e.target.value)} />
                    <div className='error'>
                        {erro}
                        </div>
                    
                    <button onClick={entrarClick} className='botao-entrar'>
                        Entrar
                    </button>
                    <p className='frase-final'> Não tem uma conta ainda? <span onClick={navegar} className='span-final'> Cadastre-se </span></p>
                </div>
            </div>
        </main>
    )
}