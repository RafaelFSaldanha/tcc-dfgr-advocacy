import './index.scss'
import '../../common/common.scss'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import { ClienteId, AlterarDados, enviarfotocliente } from '../../../api/Advogadoapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Index() {
    const cliente = storage("cliente-logado")
    const [dados, setDados] = useState([])
    const [ids, setIds]= useState(0)
    const [nome, setNome] = useState(cliente.nome)
    const [telefone, setTelefone]= useState(cliente.telefone)
    const [local, setLocal] = useState(cliente.localizacao)
    const [email,setEmail] = useState(cliente.email)
    const [senha,setSenha] = useState(cliente.senha)
    const [foto, setFoto]= useState()
    const navigate= useNavigate()

    async function Abrir() {
    const cliente = storage('cliente-logado')
    const  r = await ClienteId(cliente.idCliente)
    setIds(cliente.idCliente)
    setDados([r])
    }

    function alteraraPerfilVerif() {
		if (!nome || nome === undefined) {
			setNome(cliente.nome);
		}
        if (!telefone || telefone === undefined) {
			setTelefone(cliente.telefone);
		}
        if (local || local === undefined) {
			setLocal(cliente.localizacao);
		}
		if (!email || email === undefined) {
			setEmail(cliente.email);
		}
		if (!senha || senha === undefined) {
			setSenha(cliente.senha);
		}
	}

    function formattel(tel){
        return tel.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1')
    }

    async function SalvarAlt() {
        try {
            const r = await AlterarDados(ids,nome, telefone, local, email, senha);
            const j = enviarfotocliente(ids, foto)
            toast.success('Faça login novamente para que as alterações possam ser feitas!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"}); 
                
            
        }
        catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    function navegar() {
        navigate('/detalheperfil')
    }
    function LoginClick() {
        storage.remove("cliente-logado")
        navigate('/login')
    }

    useEffect(()=>{
        Abrir()
        alteraraPerfilVerif()
        
    },[])

    function escolherImagem() {
        document.getElementById('foto').click()
    }

    function MostrarImagem() {
        return URL.createObjectURL(foto)
    }
    return (
        <main className='info-adv'>
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
        theme="dark"
        style={{width: '16em'}}/>
            <header>
                <img src="/assets/images/logodourada.svg" alt="" />
                <div className='div-link-home'>
                    <p className='link' onClick={LoginClick}>Fazer Login</p>
                    <p className='link' onClick={navegar}>Voltar</p>
                </div>
            </header>
                <div>
                    <div className='div-cont'>
                    {dados.map(item =>
                <div className='div-geral'>
                <div>
                    <div className='div-1'>
                        <div onClick={escolherImagem} className='div-img'>
                            {!foto &&
                            <img className='fotoperfil' src="/assets/images/download.svg" alt="" />
                            }
                            {foto &&
                            <img className='foto' src={MostrarImagem()} alt="" />
                            }
                            <input type="file" id='foto' onChange={e=> setFoto(e.target.files[0])}/>
                        </div>
                        <div className='div-cont'>
                            <div className='div-cont-1'>
                                <div className='individual'>
                                {!nome ? (
									<div>
										<p className='p-t'> Nome: </p>
										<input className="p-p" type="text" placeholder={item.nome} value={nome} onChange={(e) => setNome(e.target.value)} />
										
									</div>
								) : (
									<div>
										<p className='p-t'>Nome:</p>
										<input
											type="text"
                                            className="p-p"
											value={nome}
											onChange={(e) => {
												setNome(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                                </div>
                                <div className='individual'>
                                {!email ? (
									<div>
										<p className='p-t'> Email: </p>
										<input className="p-p" type="text" placeholder={item.email} value={email} onChange={(e) => setEmail(e.target.value)} />
										
									</div>
								) : (
									<div>
										<p className='p-t'>Email:</p>
										<input
											type="text"
                                            className="p-p"
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                                </div>
                                <div className='individual'>
                                {!senha ? (
									<div>
										<p className='p-t'> Senha: </p>
										<input className="p-p" type="text" placeholder={item.senha} value={senha} onChange={(e) => setSenha(e.target.value)} />
										
									</div>
								) : (
									<div>
										<p className='p-t'>Senha:</p>
										<input
											type="password"
                                            className="p-p"
											value={senha}
											onChange={(e) => {
												setSenha(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                                </div>
                                <div className='individual'>
                                {!telefone ? (
									<div>
										<p className='p-t'> Telefone: </p>
										<input className="p-p" type="text" placeholder={item.telefone} value={telefone} onChange={(e) => setTelefone(formattel(e.target.value))} />
										
									</div>
								) : (
									<div>
										<p className='p-t'>Telefone:</p>
										<input
											type="text"
                                            className="p-p"
											value={telefone}
											onChange={(e) => {
												setTelefone(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Localização:</p>
                                    <select className='select-cliente' value={local} type='text' onChange={e => setLocal(e.target.value)}>
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

                                <div className='div-check'>
                                    <img onClick={SalvarAlt} src="/assets/images/check.png" alt="" />

                                </div>
                            </div>
                            
                        </div>
                       
                    </div>
                    
                </div>
            </div>
                )}
                
                        </div>
                            </div>
                           
                         </main>
    )
}