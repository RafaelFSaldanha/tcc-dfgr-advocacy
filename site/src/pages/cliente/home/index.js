import MenuLateral from '../../../components/menulateral/index.js';
import Cabecalho from '../../../components/cabecalho/index.js';
import './index.scss'
import "../../common/common.scss"


export default function HomeCliente(){
    return(
        <main className="main-admin">
            <MenuLateral />
            <div className='container'>
                <Cabecalho />
                <div className='conteudo'>
                    <p> Área do Cliente</p>
                    <img src='/assets/images/logoapagada.svg' alt='logo' />
                </div>
            </div>
        </main>
    );
}