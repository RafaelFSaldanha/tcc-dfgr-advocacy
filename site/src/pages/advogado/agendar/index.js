import MenuLateral from '../../../components/menulateral/index.js';
import Cabecalho from '../../../components/cabecalho/index.js';
import './index.scss'
import { useEffect, useState } from 'react'
import { ListarAreas, Agendar, ListarClientes } from '../../../api/Advogadoapi.js';
import storage from 'local-storage'


export default function AgendarConsultoria(){
    const [idAdvogado, setidAdvogado] = useState();
    const [clientes, setCliente] = useState([])
    const [idCliente, setIdCliente] = useState('')
    const [idArea, setIdArea] = useState()
    const [areas, setAreas] = useState([])
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [desc, setDesc] = useState('')

    async function listarAreas(){
        const r = await ListarAreas();
        setAreas(r)
    }
    async function listarClientes() {
        const r = await ListarClientes();
        setCliente(r)
    }

        useEffect(() =>{
            listarAreas();
            listarClientes();
            const Advogado = storage('usuario-logado')
            setidAdvogado(Advogado.id)
        }, [])
        
        async function salvar() {
            try {
                const r = await Agendar(idAdvogado, idCliente, idArea, data, hora, desc);
                alert('Agendado com sucesso');
                
            }
            catch (err) {
                alert(err.message)
                
            }
        }


    return(
        <main className="main-agendar">
            <MenuLateral />
            <div className='container'>
                <Cabecalho />
                <div className='conteudo'>
                    <div className="conteudo-div-principal">
                        <div>
                            <p>Nome do Cliente</p>
                            <select value={idCliente} onChange={e => setIdCliente(e.target.value)}>
                            <option> Selecione</option>

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