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
        Listar()
    }, [])


    
    return (
        <main>
            
            <div className='conteudo'>
            <div className='dados'>
                <p> Tipo de Consultoria </p>
                <div className='dado'>
                {card.map(item =>
                            <p className="areas" value={item.id}> {item.area} </p> )}
                </div>
            </div>
            <div className='dados'>
                <p> Nome do Cliente </p>
                <div className='dado'>
                {card.map(item =>
                            <p className="areas" value={item.id}> {item.cliente} </p> )}
                </div>
            </div>
            <div className='dados'>
                <p> Data e Hora </p>
                <div className='data-hora'>
                    <div className='data'>
                    {card.map(item =>
                            <p className="areas" value={item.id}> {item.dia} </p> )}
                    </div>
                    <div className='hora'>
                    {card.map(item =>
                            <p className="areas" value={item.id}> {item.hora} </p> )}
                    </div>
                </div>
            </div>
            <div className='dado-desc'>
                <p> Descrição </p>
                <div className='dado'>
                {card.map(item =>
                            <p className="areas" value={item.id}> {item.descricao} </p> )}
                </div>
            </div>
            <div className='icones'>
                <img className='icone' src={Deletar} alt='deletar' />
                <img className='icone' src={Alterar} alt='editar' />
            </div>
        </div>
            
     
            
        </main>
    )
}