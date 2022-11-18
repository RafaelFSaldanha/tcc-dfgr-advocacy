import MenuLateral from '../../../components/menulateral/index.js';
import Cabecalho from '../../../components/cabecalho/index.js';
import './index.scss'
import { useEffect, useState } from 'react'
import { ListarAreas, Agendar, ListarClientes, Situacao } from '../../../api/Advogadoapi.js';
import storage from 'local-storage'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function AgendarConsultoria(){
    const [idAdvogado, setidAdvogado] = useState();
    const [clientes, setCliente] = useState([])
    const [idCliente, setIdCliente] = useState('')
    const [idArea, setIdArea] = useState()
    const [areas, setAreas] = useState([])
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [desc, setDesc] = useState('')
    const [situ, setSitu]= useState('')

    async function listarAreas(){
        const r = await ListarAreas();
        setAreas(r)
    }
    async function listarClientes() {
        const r = await ListarClientes();
        setCliente(r)
    }

    async function Sit() {
        const r = await Situacao(idAdvogado)
        setSitu(r.situacao)
        console.log(r.situacao)
    }

        useEffect(() =>{
            listarAreas();
            listarClientes();
            const Advogado = storage('advogado-logado')
            setidAdvogado(Advogado.idAdvogado)
            console.log(idAdvogado)
            Sit()
        }, [])

        useEffect(()=>{
            Sit()
        })
        
        async function salvar() {
            try {
               if (situ==='Em Análise') {
                    toast.error('Sua Conta está em análise')
               }
               else{
                const r = await Agendar(idAdvogado, idCliente, idArea, data, hora, desc);
                toast.success('Agendado com sucesso', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"});
               }
            }
            catch (err) {
                toast.error(err.response.data.erro)
                
            }
        }


    return(
        <main className="main-agendar">
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
            <MenuLateral />
            <div className='container'>
                <Cabecalho />
                <div className='conteudo'>
                    <div className="conteudo-div-principal">
                        <h1> Agendar Consultoria</h1>
                        <div >
                            <p>Nome do Cliente</p>
                            <select value={idCliente} onChange={e => setIdCliente(e.target.value)}>
                            <option selected hidden> Selecione</option>

                            {clientes.map(item =>
                            <option className="areas" value={item.id}> {item.cliente} </option> )}
                            </select>
                        </div>
                        <div>
                            <p>Tipo de Consultoria</p>
                            <select value={idArea} onChange={e => setIdArea(e.target.value)}>
                            <option selected disabled hidden> Selecione</option>

                                
                            {areas.map(item =>
                            <option className="areas" value={item.id}> {item.area} </option> )}
                            </select>
                        </div>
                        <div>
                            <p className='data-titulo'>Data e Hora</p>
                            <div className='data-hora'>
                            <input value={data} className="data" type="date" onChange={e => setData(e.target.value)}></input>
                            <input value={hora} className='hora' type='time' onChange={e => setHora(e.target.value)}></input>
                            </div>
                        </div>
                        <div>
                            <p>Descrição</p>
                            <textarea value={desc} onChange={e => setDesc(e.target.value)} />
                        </div>
                        
                        <button onClick={salvar}> Agendar </button>
                    </div>
                </div>
            </div>
        </main>
    );
}