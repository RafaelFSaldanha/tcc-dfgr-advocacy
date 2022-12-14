import '../../common/common.scss'
import '../login/index.scss'
import { ClienteLogin } from '../../../api/Advogadoapi'
import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import storage from 'local-storage'

export default function Index() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [erro, setErro] = useState('');

    const navigate = useNavigate();
    const ref = useRef();

	document.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			const btn = document.querySelector("#send");
			btn.click();
		}
	});


    function AdvLogin() {
        navigate('/advogado/login')
    }
    useEffect(() => {
        if (storage('cliente-logado')) {
            navigate('/home')
        }

    }, [])
    async function entrarClick() {
        ref.current.continuousStart();

        try {

            const r = await ClienteLogin(email, senha);
            storage('cliente-logado', r)

            setTimeout(() => {
                navigate('/home');
            }, 2000);

        }

        catch (err) {
            ref.current.complete();
            if (err.response.status === 401) {
                setErro(err.response.data.erro);
            }
        }
    }

    async function cadastrarClick() {
        ref.current.continuousStart();

        setTimeout(() => {
            navigate('/cadastro');
        }, 500)
    }

    function VoltarLanding() {
        navigate('/')
    }

    function Adm() {
        navigate('/admin/login')
    }

    return (

        <main className='tela-login'>
            <header>
                <p onClick={VoltarLanding}> Continuar como visitante</p>
            </header>
            <LoadingBar color='#AD8217' ref={ref} />

            <div className='div-bg-main'>
                <img className='logo' src='/assets/images/logodourada.svg' alt='' />
                <div className='div-bg-input'>
                    <div className='input-email'>
                        <p>Email<span> *</span></p>
                        <input value={email} type='email' placeholder='Insira seu email' onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className='input-senha'>
                        <p>Senha <span> *</span></p>
                        <input value={senha} type='password' placeholder='*********' onChange={e => setSenha(e.target.value)} />
                    </div>
                </div>
                <div className='error'>
                    {erro}
                </div>
                <div className='div-bg-button'>
                    <button id="send" onClick={entrarClick} className='entrar-button' >Entrar</button>
                    <p className='cadastro-con'>N??o tem uma conta ainda? <a onClick={cadastrarClick}> Cadastre-se </a></p>
                    <p className='cadastro-con'>J?? ?? um de nossos associados? <a onClick={AdvLogin}> Entrar </a></p>
                </div>
            </div>

            <footer className='botaoadm'>
                <p onClick={Adm} className='a'>??rea Administrativa</p>
            </footer>
        </main>
    )
}