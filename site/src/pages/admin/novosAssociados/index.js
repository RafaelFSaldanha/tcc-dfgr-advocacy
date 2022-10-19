import Menulateral from '../../../components/menulateraladm'
import Advogados from '../../../components/advogadosadmin'
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
                    <h1> Novos Associados </h1>
                    <thead className='thead'>
                        <div className="container">
                            <th>Nome</th>
                            <th>OAB</th>
                            <th>Localização</th>
                            <th>Email</th>
                        </div>
                    </thead>
                    <Advogados/>
                </div>
            </div>
        </main>
    )
}