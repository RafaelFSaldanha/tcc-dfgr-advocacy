import './index.scss';
import '../../common/common.scss';
import Rodape from '../../../components/rodape';
import { useNavigate } from 'react-router-dom'


export default function AssociadosPage() {


    const navigate = useNavigate();

    async function AtuacaoClick() {
        navigate('/atuacao');
    }
    async function SobrenosClick() {
        navigate('/sobrenos');
    }

    async function CadastroClick() {
        navigate('/advogado/cadastro')
    }

    async function VoltarClick() {
        navigate('/');
    }



    return (
        <main className="main">
            <div className='cabecalho'>
                <img className='logo' src='/assets/images/logodourada.svg' alt='logo' />
                <div className='div-links'>
                    <a className='links' href='' onClick={VoltarClick}> Inicio</a>
                    <a className='links' href='' onClick={SobrenosClick}> Sobre Nós </a>
                    <a className='links' href='' onClick={AtuacaoClick}> Areas de Atuação </a>
                    <img className='links' className="cadastro-image" onClick={CadastroClick} src="/assets/images/Account circle.png" alt="" />
                </div>
            </div>

        <div className="titulo-div">
            <h1>Nossos Associados</h1>
            <input className='input' type="text" />
        </div>






        <Rodape/>
        </main>
    )
}