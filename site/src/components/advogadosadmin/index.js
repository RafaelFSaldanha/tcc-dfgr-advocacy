import './index.scss'
import { useState, useEffect } from 'react';
import { ListarAdvAdmin, AlterarSit, DeletarAdvogado } from '../../api/Advogadoapi';


export default function Index () {

    const [card, setCard] = useState([]);

    async function Listar(){
        const r = await ListarAdvAdmin();
        setCard(r)

    }

    async function Aceito(id) {
        try {
            const r = await AlterarSit(id)
            Listar();
        } catch (err) {
            
        }
    }

    async function Recusado(id) {
        try {
            const r = await DeletarAdvogado(id)
            Listar();
        } catch (err) {
            
        }
    }

    useEffect(() =>{
        Listar();
    }, [])
    

    return (
       <tbody>
        {card.map(item =>
            <tr className='conteudos-advogado-admin '>
                <div className='container'>
                    <td className='info'>{item.nome.substr(0,15)}...</td>
                    <td className='info'>{item.oab}</td>
                    <td className='info'>{item.local}</td>
                    <td className='info'>{item.email}</td>
                    <img onClick={()=>Aceito(item.id)} className='foto' src="../assets/images/Checkmark.png" alt="" />
                    <img onClick={()=>Recusado(item.id)} className='foto' src="/assets/images/deletar.png" alt="" />
                </div>
            </tr>
            )}
       </tbody>
    )
}