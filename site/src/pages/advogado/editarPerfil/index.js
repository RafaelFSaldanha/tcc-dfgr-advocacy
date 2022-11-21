import '../../common/common.scss'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AdvogadoId, EditPerfil, enviarfotoadvogado, ListarAreas, Advogadosid2 } from '../../../api/Advogadoapi'
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



export default function EditarPerfil() {
    const advogado = storage('advogado-logado')
    const [dados, setDados] = useState([])
    const [senha, setSenha] = useState(advogado.senha)
    const [ids, setIds] = useState(0)
    const [nome, setNome] = useState(advogado.nome);
    const [email, setEmail] = useState(advogado.email);
    const [localizacao, setLocalizacao] = useState(advogado.localizacao);
    const [telefone, setTelefone] = useState(advogado.telefone);
    const [desc, setDesc] = useState(advogado.descricao)
    const [foto, setFoto] = useState()
    const [areas, setAreas] = useState([])
    const [idArea, setIdArea] = useState(advogado.area)
    const navigate = useNavigate()

    useEffect(() => {
        carregaradvogado();
        listarAreas();
        alteraraPerfilVerif();
        if(!storage('advogado-logado')){
            navigate('/advogado/login')
        }
    }, [])

    async function listarAreas() {
        const r = await ListarAreas();
        setAreas(r)
    }

    async function carregaradvogado() {
        const advogado = storage('advogado-logado')
        const r = await Advogadosid2(advogado.idAdvogado);
        setDados(r)
        setIds(advogado.idAdvogado)
        console.log()

    }
    
    function Navegar() {
        navigate('/perfil/advogado')
    }
    function LoginClick() {
        storage.remove("advogado-logado")
        navigate('/advogado/login')
    }

    async function Alterar() {
        try {
            const r = await EditPerfil(ids, nome, idArea, email, localizacao, telefone, desc);
            const j = enviarfotoadvogado(ids, foto)
            toast.success('Faça login novamente para que as alterações possam ser feitas! ', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });

        }
        catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    function escolherImagem() {
        document.getElementById('foto').click()
    }
    function alteraraPerfilVerif() {
		if (!nome || nome === undefined) {
			setNome(advogado.nome);
		}
        if (!telefone || telefone === undefined) {
			setTelefone(advogado.telefone);
		}
        if (localizacao || localizacao === undefined) {
			setLocalizacao(advogado.localizacao);
		}
        if (!desc || desc === undefined) {
			setDesc(advogado.descricao);
		}
        if (!idArea || idArea === undefined) {
			setIdArea(advogado.area);
		}
		if (!email || email === undefined) {
			setEmail(advogado.email);
		}
		if (!senha || senha === undefined) {
			setSenha(advogado.senha);
		}
	}

    function MostrarImagem() {
        return URL.createObjectURL(foto)
    }

    function formattel(tel) {
        return tel.replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1')
    }



    return (
        <main className='editar-perfil'>
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
                style={{ width: '19em' }} />
            <header className='header'>
                <div className='h-h'>
                    <img className='img-logo' src='/assets/images/logodourada.svg' alt='' />
                    <div className='buttons'>
                    <p onClick={LoginClick} className='hihihi'>Fazer Login</p>
                    <p onClick={Navegar} className='hihihi'>Voltar</p>
                    </div>
                </div>
            </header>
            <div className='div-principal'>
                    <div className='conteudo'>
                        {dados.map(item =>
                        <div className='div-geral'>                   
                            <div className='div-upload' onClick={escolherImagem}>
                                {!foto &&
                                    <img src='/assets/images/download.svg' alt='' />
                                }
                                {foto &&
                                    <img className='foto' src={MostrarImagem()} alt="" />
                                }

                                <input type="file" id='foto' onChange={e => setFoto(e.target.files[0])} />
                            </div>

                            <div className='div-info1'>
                            {!nome ? (
									<div>
										<p> Nome: </p>
										<input type="text" placeholder={item.nome} value={nome} onChange={(e) => setNome(e.target.value)} />
										
									</div>
								) : (
									<div>
										<p>Nome:</p>
										<input
											type="text"
											value={nome}
											onChange={(e) => {
												setNome(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                            {!email ? (
									<div>
										<p> Email: </p>
										<input type="text" placeholder={item.email} value={email} onChange={(e) => setEmail(e.target.value)} />
										
									</div>
								) : (
									<div>
										<p>Email:</p>
										<input
											type="text"
											value={email}
											onChange={(e) => {
												setEmail(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                            {!senha ? (
									<div>
										<p> Senha: </p>
										<input type="text" placeholder={item.senha} value={senha} onChange={(e) => setSenha(e.target.value)} />
										
									</div>
								) : (
									<div>
										<p>Senha:</p>
										<input
											type="password"
											value={senha}
											onChange={(e) => {
												setSenha(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                            {!telefone ? (
									<div>
										<p> Telefone: </p>
										<input type="text" placeholder={item.telefone} value={telefone} onChange={(e) => setTelefone(formattel(e.target.value))} />
										
									</div>
								) : (
									<div>
										<p>Telefone:</p>
										<input
											type="text"
											value={telefone}
											onChange={(e) => {
												setTelefone(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                                <div>
                                    <p> Localização: </p>
                                    <select className='select' value={localizacao} onChange={e => setLocalizacao(e.target.value)}>
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
                                <div>
                                    <p> Áreas de atuação: </p>
                                    <select className='select' value={idArea} onChange={e => setIdArea(e.target.value)}>
                                        <option selected disabled hidden> Selecione </option>

                                        {areas.map(item =>
                                            <option value={item.id}> {item.area} </option>)}
                                    </select>
                                </div>
                            </div>
                            <div className='div-info2'>
                            {!desc ? (
									<div>
										<p> Descrição: </p>
										<textarea type="text" placeholder={item.descricao} value={desc} onChange={(e) => setDesc(e.target.value)} />
										
									</div>
								) : (
									<div>
										<p>Descrição:</p>
										<textarea
											type="text"
											value={desc}
											onChange={(e) => {
												setDesc(e.target.value);
												alteraraPerfilVerif();
											}}
										/>
									</div>
								)}
                            </div>

                        </div>
                        )}
                        <div onClick={Alterar} className='div-check'>
                            <img src='/assets/images/check.png' alt='' />
                        </div>
                    </div>
            </div>
        </main>
    )
}