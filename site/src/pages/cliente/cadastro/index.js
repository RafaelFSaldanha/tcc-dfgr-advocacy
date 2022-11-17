import '../../common/common.scss'
import './index.scss'
import { CadastrarCliente } from '../../../api/Advogadoapi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Index() {
    
    const [nome, setNome] = useState('')
    const [telefone, setTelefone]= useState('')
    const [localizacao, setLocalizacao] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')

    const navigate= useNavigate();
    
    function formattel(tel){
        return tel.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }

    async function cadastrare(){
        try {
            const r = await CadastrarCliente(nome, telefone, localizacao, email, senha);
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
    function VoltarLanding(){
        navigate('/')
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
            <header>
            <p onClick={VoltarLanding}> Continuar como visitante</p>
        </header>
            <div className='div-cadastro'>
                <img className='logo' src='/assets/images/logodourada.svg' alt=''/>
                <div className='div-inputs'>
                    <div className='individual'>
                        <p className='nome-input'> Nome <span>*</span></p>
                        <input value={nome} type='text' className='input' placeholder='Insira seu nome completo' onChange={e => setNome(e.target.value)}/>
                    </div>
                    <div className='individual'>
                        <p className='nome-input'> Telefone <span>*</span></p>
                        <input value={telefone} type='text' className='input' placeholder='Insira um número para contato' onChange={e => setTelefone(formattel(e.target.value))}/>
                    </div>
                    <div className='individual'>
                        <p className='nome-input'> Localização <span>*</span></p>
                        <select value={localizacao} type='text' className='input' placeholder='Insira o seu estado de moradia' onChange={e => setLocalizacao(e.target.value)}>
                        <option selected disabled hidden> Selecione um estado</option>
                        <option>AC</option>
                        <option>AL</option>
                        <option>AP</option>
                        <option>AM</option>
                        <option>BA</option>
                        <option>CE</option>
                        <option>DF</option>
                        <option>ES</option>
                        <option>GO</option>
                        <option>MA</option>
                        <option>MT</option>
                        <option>MS</option>
                        <option>MG</option>
                        <option>PA</option>
                        <option>PB</option>
                        <option>PR</option>
                        <option>PE</option>
                        <option>PI</option>
                        <option>RJ</option>
                        <option>RN</option>
                        <option>RS</option>
                        <option>RO</option>
                        <option>RR</option>
                        <option>SC</option>
                        <option>SP</option>
                        <option>SE</option>
                        <option>TO</option>
                        </select>
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