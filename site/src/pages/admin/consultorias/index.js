import Menulateral from '../../../components/menulateraladm'
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
                    <img src="/assets/images/logoapagada.svg" alt="" />
                </div>
            </div>
        </main>
    )
}