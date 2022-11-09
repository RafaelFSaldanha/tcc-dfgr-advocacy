import Menulateral from '../../../components/menulateraladm'
import Advogados from '../../../components/advaceitos'
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
                    <h1 className='assoc'> Associados </h1>
                    <thead className='thead'>
                        <div className="container-assoc">
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Localização</th>
                            <th>Área de atuação</th>
                            <th>Email</th>
                        </div>
                        
                    </thead>
                    <Advogados/>
                </div>
            </div>
        </main>
    )
}