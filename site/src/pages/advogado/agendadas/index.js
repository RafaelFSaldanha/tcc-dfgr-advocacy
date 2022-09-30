import MenuLateral from '../../../components/menulateral/index.js';
import Cabecalho from '../../../components/cabecalho/index.js';
import './index.scss';
import CardConsultoria from '../../../components/consultorias/index.js'

export default function Index() {
    
    return (
        <main className='consultorias-agendadas'>
            <MenuLateral />
            <div className='div-principal'>
                <Cabecalho />
                <div className='div-conteudos'>
                    <CardConsultoria />
                </div>    
            </div>
        </main>
    );
}