import '../../common/common.scss'
import './index.scss'
import { CadastrarCliente } from '../../../api/Advogadoapi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    
    const [nome,setNome] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const navigate= useNavigate();
    
    async function cadastrar(){
        try {
            const r = await CadastrarCliente(nome, email, senha);
            alert('deu certo')
        } catch (err) {
            alert(err.response.data.erro)
        }
    }
    
    async function navegar(){
        navigate('/login/usuario')
    }
    
    
    return (
        <main className='tela-cadastro'>
            <div className='div-cadastro'>
                <img className='logo' src='../../../public/assets/images/logodourada.svg' />
                <div className='div-inputs'>
                    <p className='nome-input'> Nome </p>
                    <input value={nome} type='text' className='input' placeholder='Insira seu nome' onChange={e => setNome(e.target.value)}/>
                    <p className='nome-input'> Email </p>
                    <input value={email} type='text' className='input' placeholder='Insira seu email' onChange={e => setEmail(e.target.value)}/>
                    <p className='nome-input'> Senha </p> 
                    <input value={senha} type='text' className='input' placeholder='****' onChange={e => setSenha(e.target.value)} />
                    <button onClick={cadastrar} className='botao-entrar'>
                        Entrar
                    </button>
                    <p className='frase-final'> Já possue uma conta? <span onClick={navegar} className='span-final'> Entrar </span></p>
                </div>
            </div>
        </main>
    )
}