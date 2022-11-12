import '../../common/common.scss'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { AdvogadoId, EditPerfil, enviarfotoadvogado, ListarAreas } from '../../../api/Advogadoapi'
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



export default function EditarPerfil() {
    const [dados, setDados] = useState([])
    const [ids, setIds] = useState(0)
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [localizacao, setLocalizacao] = useState('');
    const [telefone, setTelefone] = useState('');
    const [desc, setDesc] = useState('')
    const [foto, setFoto] = useState()
    const [areas, setAreas] = useState([])
    const [idArea, setIdArea] = useState()
    const navigate = useNavigate()

    useEffect(() => {

        carregaradvogado();
        listarAreas();

    }, [])

    async function listarAreas() {
        const r = await ListarAreas();
        setAreas(r)
    }

    async function carregaradvogado() {
        const advogado = storage('advogado-logado')
        const r = await AdvogadoId(advogado.id);
        setDados([r])
        setIds(advogado.id)
        console.log(r)


    }

    function Navegar() {
        navigate('/perfil/advogado')
    }

    async function Alterar() {
        try {
            const r = await EditPerfil(ids, nome, idArea, email, localizacao, telefone, desc);
            const j = enviarfotoadvogado(ids, foto)
            toast.success('Alterado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
            Navegar()


        }
        catch (err) {
            toast.error(err.response.data.erro)
        }
    }

    function escolherImagem() {
        document.getElementById('foto').click()
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
                style={{ width: '16em' }} />
            <header>
                <img src='/assets/images/logodourada.svg' alt='' />
            </header>
            <div className='div-principal'>
                {dados.map(item =>
                    <div className='conteudo'>
                        <div className='div-geral'>
                            <div className='div-upload' onClick={escolherImagem}>
                                {!foto &&
                                    <img src='/assets/images/upload.png' alt='' />
                                }
                                {foto &&
                                    <img className='foto' src={MostrarImagem()} alt="" />
                                }

                                <input type="file" id='foto' onChange={e => setFoto(e.target.files[0])} />
                            </div>
                            <div className='div-info1'>
                                <div>
                                    <p> Nome: </p>
                                    <input placeholder={item.nome} type='text' onChange={e => setNome(e.target.value)} />
                                </div>
                                <div>
                                    <p> Email: </p>
                                    <input placeholder={item.email} type='email' onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <p> Telefone: </p>
                                    <input placeholder={item.tel} type='text' onChange={e => setTelefone(formattel(e.target.value))} />
                                </div>
                                <div>
                                    <p> Localização: </p>
                                    <select className='input' value={localizacao} type='text' onChange={e => setLocalizacao(e.target.value)}>
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
                                <p> Descrição: </p>
                                <textarea value={desc} type='text' onChange={e => setDesc(e.target.value)} />
                            </div>
                        </div>
                        <div onClick={Alterar} className='div-check'>
                            <img src='/assets/images/check.png' alt='' />
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}