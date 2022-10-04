import './index.scss';
import Deletar from '../../assets/images/deletar.png'
import Alterar from '../../assets/images/editar.png'
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { ListarConsultorias } from '../../api/Advogadoapi';

export default function Index () {

    const [card, setCard] = useState([]);

    async function Listar(){
        const Advogado = storage('usuario-logado');
        const r = await ListarConsultorias(Advogado.id);
        setCard(r)
        console.log(r)
    }



    useEffect(() =>{
        Listar();
    }, [])


    
    return (
       <tbody>
        {card.map(item =>
            <tr>
                <td>{item.area}</td>
                <td>{item.cliente}</td>
                <td>{item.dia.substr(0, 10)}</td>
                <td>{item.hora}</td>
                <td>{item.descricao}</td>
            </tr>
            )}
       </tbody>
    )
}