import './index.scss'
import '../../common/common.scss'
import { useState, useEffect } from 'react'
import storage from 'local-storage'
import { ClienteId, buscarfoto, AlterarDados } from '../../../api/Advogadoapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export default function Index() {
    const [dados, setDados] = useState([])
    const [ids, setIds]= useState(0)
    const [nome, setNome] = useState('')
    const [tel, setTelefone]= useState('')
    const [local, setLocal] = useState('')
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    async function Abrir() {
    const cliente = storage('cliente-logado')
    const  r = await ClienteId(cliente.id)
    setIds(cliente.id)
    setDados([r])
    }

    async function SalvarAlt() {
        try {
            const r = await AlterarDados(ids,nome, tel, local, email, senha);
            toast.success('Agendado com sucesso', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"});

                console.log(nome)
            
        }
        catch (err) {
            toast.error(err.response.data.erro)
            console.log(local)
        }
    }

    useEffect(()=>{
        Abrir()
        
    },[])
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
                    <img src="/assets/images/home.png" alt="" />
                </div>
            </header>
                <div>
                        <div className='div-cont'>
                        {dados.map(item=>
                <div className='div-geral'>
                <div>
                    <div className='div-1'>
                        <div className='div-img'>
                            {!item.foto &&
                            <img className='fotoperfil' src="/assets/images/semfoto.png" alt="" />
                            }
                            {item.foto &&
                            <img className='fotoperfil' src={buscarfoto(item.foto)} alt="" />
                            }
                        </div>
                        <div className='div-cont'>
                            <div className='div-cont-1'>
                                <div className='individual'>
                                    <p className='p-t'>Nome:</p>
                                    <input placeholder={item.nome}className='p-p' onChange={e => setNome(e.target.value)}></input>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Email:</p>
                                    <input placeholder={item.email}className='p-p' onChange={e => setEmail(e.target.value)}></input>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Senha:</p>
                                    <input placeholder={item.senha} className='p-p'onChange={e => setSenha(e.target.value)} />
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Telefone:</p>
                                    <input  placeholder={item.tel} className='p-p' onChange={e => setTelefone(e.target.value)}></input>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Localização:</p>
                                    <input placeholder={item.local}className='p-p' onChange={e => setLocal(e.target.value)}></input>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
                )}
                <div className='div-check'>
                        <img onClick={SalvarAlt} src="/assets/images/check.png" alt="" />
                    </div>
                        </div>
                            </div>
                           
                         </main>
    )
}