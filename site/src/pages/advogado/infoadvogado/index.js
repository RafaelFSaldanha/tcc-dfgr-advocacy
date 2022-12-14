import './index.scss'
import '../../common/common.scss'
import InfoAdvComp from '../../../components/infoadv';
import { useNavigate } from 'react-router-dom';
import storage from "local-storage"


export default function InformaAdvogado(){

    const navigate = useNavigate();
    const aaa = storage('cliente-logado')

    async function InicioClick() {
        navigate('/');
    }

    async function AssociadosClick() {
        if(!aaa.idCliente) {
            navigate('/login')
        }
        else {
            navigate('/associados')
        }
    }

    return(
        <main>
            <div className='cabecalho-info'>
                <img className='logo' src='/assets/images/logodourada.svg' alt='logo' />
                <div className='div-links'>
                    <a className='links' href='' onClick={AssociadosClick}> Associados </a>
                    <a className='links' href='' onClick={InicioClick}> Inicio </a>
                </div>
            </div> 

            <div className='div-titulo'>
                <h1 className='titulo'>
                    Profissional
                </h1>
            </div>

            <InfoAdvComp/>

        </main>
    )
}