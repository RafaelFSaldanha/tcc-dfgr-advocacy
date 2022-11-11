import './index.scss';
import '../../common/common.scss';
import {useState, useRef, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { FoneNumero } from './utils';
import { AdvogadoCadastro, ListarAreas } from '../../../api/Advogadoapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



export default function CadastroAdvogado(){

    const [nome, setNome] = useState('')
    const [estado, setEstado] = useState('')
    const [oab, setOab] = useState('')
    const [telefone, setTelefone] = useState('')
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [areas, setAreas] = useState([])
    const [idArea, setIdArea] = useState()

    const navigate = useNavigate();
    async function voltar(){
        navigate('/advogado/login');
    }

    async function listarAreas() {
        const r = await ListarAreas();
        setAreas(r)
    }

    useEffect(() =>{
        listarAreas();
    }, [])

    async function cadastrar(){
        try {
            const r = await AdvogadoCadastro(nome, estado, oab, idArea, telefone, email, senha);
            toast.success('Seu perfil será analisado!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
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
    function VoltarLanding(){
        navigate('/')
    }

    function formattel(tel){
        return tel.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }


    return(
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
            <div className='div-principal'>
                <img className='logo' src='/assets/images/logodourada.svg' alt='logo' />
                <div className='div-inputs'>
                    <div className='div-input'>
                        <p>Nome <span>*</span> </p>
                        <input className='input' value={nome} type='text'placeholder='Insira seu nome completo' onChange={e => setNome(e.target.value)} />
                    </div>
                    
                    <div className='div-input'>
                        <p>Estado de Atuação <span>*</span></p>
                        <select className='input' value={estado} type='text' onChange={e => setEstado(e.target.value)}> 
                        <option selected disabled hidden> Selecione </option>
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

                    <div className='div-input'>
                        <p>Número do OAB <span> *</span></p>
                        <input maxLength={8} className='input' value={oab} type='text' placeholder='Ex: SP123456' onChange={e => setOab(e.target.value)}/>
                    </div>

                    <div className='div-input'>
                        <p> Telefone <span> *</span></p>
                        <input className='input' value={telefone} type='text' placeholder='Insira seu telefone' onChange={e => setTelefone(formattel(e.target.value))}/>
                    </div>

                    <div className='div-input'>
                        <p> Email <span> *</span></p>
                        <input className='input' value={email} type='email' placeholder='Insira seu email' onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div className='div-input'>
                        <p>Senha <span> *</span></p>
                        <input className='input' value={senha} type='password' placeholder='*********' onChange={e => setSenha(e.target.value)}/>
                    </div>

                    <div className='div-input'>
                        <p>Área de atuação<span> *</span></p>
                        <select value={idArea} onChange={e => setIdArea(e.target.value)}>
                            <option selected disabled hidden> Selecione </option>
                            
                            {areas.map(item =>
                            <option value={item.id}> {item.area} </option> )}
                        </select>
                    </div>
                </div>
                <button className='button' onClick={cadastrar}> Cadastrar-se </button>
                <p className='entrar-con'>Já possui uma conta? <a onClick={voltar}> Entrar </a></p>
            </div>
       </main>
)}
