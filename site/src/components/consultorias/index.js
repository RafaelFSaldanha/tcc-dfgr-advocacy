import './index.scss';
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { ListarConsultorias, Deletar } from '../../api/Advogadoapi';
import { useNavigate } from 'react-router-dom';


export default function Index () {

    const [card, setCard] = useState([]);
    const [id, setId] = useState(0);
    const [modal, setModal] = useState(false);

    const navigate = useNavigate();

    async function Listar(){
        const Advogado = storage('usuario-logado');
        const r = await ListarConsultorias(Advogado.id);
        setCard(r)
        console.log(card)

    }

    async function remover(id) {
        const resp = await Deletar(id);
        Listar();
    }

    function informacoes(id) {
        navigate(`/advogado/informacoes/${id}`)
    }

    useEffect(() =>{
        Listar();
        console.log(id)
    
    }, [])
    


    
    return (
       <tbody>
        {card.map(item =>
            <tr onClick={()=> informacoes(item.id)} className='conteudos'>
                <div className='container'>
                    <td className='info'>{item.area}</td>
                    <td className='info'>{item.cliente}</td>
                    <td className='info'>{item.dia.substr(0, 10)}</td>
                    <td className='info'>{item.hora.substr(0, 5)}</td>
                </div>
            </tr>
            
            )}

    
        

       </tbody>
    )
}