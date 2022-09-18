import MenuLateral from '../../../components/menulateral/index.js';
import Cabecalho from '../../../components/cabecalho/index.js';
import LogoApagada from '../../../assets/images/logoapagada.svg'
import './index.scss'


export default function Admin(){
    return(
        <main className="main-admin">
            <MenuLateral />
            <div className='container'>
                <Cabecalho />
                <div className='conteudo'>
                    <p> Área do Advogado</p>
                    <img src={LogoApagada} />
                </div>
            </div>
        </main>
    );
}