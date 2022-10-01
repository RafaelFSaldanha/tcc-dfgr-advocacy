import './index.scss';
import Deletar from '../../assets/images/deletar.png'
import Alterar from '../../assets/images/editar.png'
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { ListarConsultorias } from '../../api/Advogadoapi';

export default function Index () {

    const [card, setCard] = useState([]);

    async function bagulhos(){
        const Advogado = storage('usuario-logado');
        setCard(ListarConsultorias(Advogado.id));
        console.log(card)
    }

    useEffect(() =>{
        bagulhos();
    }, [])


    
    return (
        <main>
            
            <div className='conteudo'>
            <div className='dados'>
                <p> Tipo de Consultoria </p>
                <div className='dado'>
                    
                </div>
            </div>
            <div className='dados'>
                <p> Nome do Cliente </p>
                <div className='dado'>

                </div>
            </div>
            <div className='dados'>
                <p> Data e Hora </p>
                <div className='data-hora'>
                    <div className='data'>

                    </div>
                    <div className='hora'>

                    </div>
                </div>
            </div>
            <div className='dado-desc'>
                <p> Descrição </p>
                <div className='dado'>

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