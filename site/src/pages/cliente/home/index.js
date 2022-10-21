import MenuLateralCliente from '../../../components/menulateralcliente/index.js';
import CabecalhoCliente from '../../../components/cabecalhocliente/index.js';
import './index.scss'
import "../../common/common.scss"


export default function HomeCliente(){
    return(
        <main className="main-admin">
            <MenuLateralCliente />
            <div className='container'>
                <CabecalhoCliente />
                <div className='conteudo'>
                    <p> Área do Cliente</p>
                    <img src='/assets/images/logoapagada.svg' alt='logo' />
                </div>
            </div>
        </main>
    );
}