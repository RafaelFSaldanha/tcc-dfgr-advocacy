import Menulateral from '../../../components/menulateraladm'
import Consultas from '../../../components/consultoriasadmin'
import '../../common/common.scss'
import './index.scss'

export default function Index() {
    return (
        <main className='home-adm'>
            <header>
                <img src="/assets/images/logodourada.svg" alt="" />
            </header>
            <div className='div-geral'>
                <Menulateral />
                <div className='div-principal'>
                    <h1> Consultorias </h1>
                    <thead className='thead'>
                        <div className="container">
                            <th>Indentificação</th>
                            <th>Nome do Advogado</th>
                            <th>Data</th>
                            <th>Hora</th>
                            <th>Nome do Cliente</th>
                        </div>
                        
                    </thead>
                    <Consultas/>
                   
                </div>
            </div>
        </main>
    )
}