import './index.scss'
import { useState, useEffect } from 'react';
import { ListarAdvAdmin2, DeletarAdvogado, Deletar } from '../../api/Advogadoapi';


export default function Index () {

    const [card, setCard] = useState([]);
    const[id, setId]= useState(0)

    async function Listar(){
        const r = await ListarAdvAdmin2();
        setCard(r)

    }

    async function deletar(id){
        const r = await Deletar(id)
        Listar();
    }


    useEffect(() =>{
        Listar();
    }, [])
    

    return (
       <tbody>
        {card.map(item =>
            <tr className='conteudos-advogado-admin '>
                <div className='container'>
                    <td className='info'>{item.id}</td>
                    <td className='info'>{item.nome}</td>
                    <td className='info'>{item.local}</td>
                    <td className='info'>{item.area}</td>
                    <td className='info'>{item.email}</td>
                    <div onClick={deletar}>
                    <img  className='foto' src="../assets/images/deletar.png" alt="" />
                    </div>
                </div>
            </tr>
            )}
       </tbody>
    )
}