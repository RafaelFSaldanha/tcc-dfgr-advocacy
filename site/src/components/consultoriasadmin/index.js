import './index.scss';
import { useState, useEffect } from 'react';
import { ListarConsultasAdmin } from '../../api/Advogadoapi';
import { useNavigate } from 'react-router-dom';


export default function Index () {

    const [card, setCard] = useState([]);
    const [id, setId] = useState(0);

    const navigate = useNavigate();

    async function Listar(){
        const r = await ListarConsultasAdmin();
        setCard(r)

    }


    useEffect(() =>{
        Listar();
    }, [])
    


    
    return (
       <tbody>
        {card.map(item =>
            <tr className='conteudos'>
                <div className='container'>
                    <td className='info'>{item.id}</td>
                    <td className='info'>{item.advogado}</td>
                    <td className='info'>{item.dia.substr(0, 10)}</td>
                    <td className='info'>{item.hora.substr(0, 5)}</td>
                    <td className='info'>{item.cliente}</td>
                </div>
            </tr>
            
            )}

    
        

       </tbody>
    )
}