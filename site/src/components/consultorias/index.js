import './index.scss';
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { ListarConsultorias, Deletar } from '../../api/Advogadoapi';

export default function Index () {

    const [card, setCard] = useState([]);
    const [id, setId] = useState(0);

    async function Listar(){
        const Advogado = storage('usuario-logado');
        const r = await ListarConsultorias(Advogado.id);
        setCard(r)
        console.log(card)

    }

    async function remover() {
        const resp = await Deletar();
        Listar();
    }

    useEffect(() =>{
        Listar();
        console.log(id)
    }, [])


    
    return (
       <tbody>
        {card.map(item =>
            <tr className='conteudo'>
                {item.id}
                <td>{item.area}</td>
                <td>{item.cliente}</td>
                <td>{item.dia.substr(0, 10)}</td>
                <td>{item.hora.substr(0, 5)}</td>
                <td>{item.descricao}</td>
                <td onClick={remover} className='icones'>
                    <img className='icone' src='../../assets/images/deletar.png' alt="" />
                </td>
                <td className='icones'>
                    <img className='icone' src="../../assets/images/editar.png" alt="" />
                </td>
            </tr>
            )}
       </tbody>
    )
}