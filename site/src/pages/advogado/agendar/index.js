import MenuLateral from '../../../components/menulateral/index.js';
import Cabecalho from '../../../components/cabecalho/index.js';
import './index.scss'
import { useEffect, useState } from 'react'
import { ListarAreas } from '../../../api/Advogadoapi.js';


export default function AgendarConsultoria(){
    const [nome, setNome] = useState('')
    const [idArea, setIdArea] = useState()
    const [areas, setAreas] = useState([])
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    const [desc, setDesc] = useState('')

    async function listarAreas(){
        const r = await ListarAreas();
        setAreas(r)
    }

        useEffect(() =>{
            listarAreas();
        }, [])
    

    return(
        <main className="main-agendar">
            <MenuLateral />
            <div className='container'>
                <Cabecalho />
                <div className='conteudo'>
                    <div className="conteudo-div-principal">
                        <div>
                            <p>Nome do Cliente</p>
                            <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Insira o nome do cliente"></input>
                        </div>
                        <div>
                            <p>Tipo de Consultoria</p>
                            <select value={idArea} onChange={e => setIdArea(e.target.value)}>
                            <option selected disabled hidden> Selecione</option>

                                
                            {areas.map(item =>
                            <option value={item.id}> {item.area} </option> )}
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
                        <button> Agendar </button>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}