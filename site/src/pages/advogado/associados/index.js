import './index.scss';
import '../../common/common.scss';
import Lupa from '../../../images/lupa.png'
import Rodape from '../../../components/rodape';
import Associadospage from '../../../components/associadospage'
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
                    <img className='links cadastro-image' onClick={CadastroClick} src="/assets/images/Account circle.png" alt="" />
                </div>
            </div>

            <div className="titulo-div">
                    <h1 className='h1-associado'>Nossos Associados</h1>
                    <div className='row'>
                    <input className='input' type="text" placeholder='Pesquisar Associados...' />
                    <img className="Lupa" src={Lupa} />
                </div>
            </div>

            <div>
            <Associadospage/>
            </div>


            <div className="torne-se">
                <div>
                    <h1 className='h1-associado'>Torne-se um Associado</h1>
                </div>
                <div>
                    <button className='button-cadastro' onClick={CadastroClick}> Cadastre-se</button>
                </div>
            </div>




            <Rodape />
        </main>
    )
}