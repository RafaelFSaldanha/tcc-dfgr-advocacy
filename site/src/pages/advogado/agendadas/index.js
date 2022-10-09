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
                    
                    <thead className='thead'>
                        <div className="container">
                            <th>Área de atuação</th>
                            <th>Nome do Cliente</th>
                            <th>Data</th>
                            <th>Hora</th>
                        </div>
                    </thead>
                    <CardConsultoria />
                </div>    
            </div>
        </main>
    );
}