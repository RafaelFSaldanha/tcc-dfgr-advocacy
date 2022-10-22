import './index.scss';
import '../../common/common.scss';
import { useNavigate } from 'react-router-dom'
import Rodape from '../../../components/rodape';


export default function SobreNos () {

    const navigate = useNavigate();

    async function EntrarClick(){
        navigate('/advogado/cadastro');
    }

    async function VoltarClick(){
        navigate('/');
    }

    async function AtuacaoClick(){
        navigate('/atuacao');
    }

    return(
        <main className='main'>
            <div className='cabecalho-sobrenos'>
                <img className='logo' src='/assets/images/logodourada.svg' alt='' />
                <div className='div-links'>
                    <a className='links' href='' onClick={VoltarClick}> Inicio </a>
                    <a className='links' href='' onClick={AtuacaoClick}> Áreas de Atuação </a>
                    <a className='links' href=' 'onClick={EntrarClick}> Entrar </a>
                </div>
            </div>

            <div className='faixa1'>
                <div className='titulo'>
                    <h1>Nossa História</h1>
                </div>
                <hr/>
                <div className='div-texto'>
                    <p className='texto'>A DFGR Advogados & Associados é uma empresa que tem como objetivo principal ajudar as pessoas que mais 
                    precisam da consultoria de um advogado.
                    Nós percebemos que muitas pessoas hoje em dia precisam de consultoria para resolver diversos assuntos, mas
                    para conseguirem um advogado que ás auxilie é uma tarefa difícil. Por isso desenvolvemos essa plataforma com o
                    objetivo de facilitar a comunicação entre a cliente e advogado.
                    Nosso objetivo é facilitar a vida das pessoas de forma rápida e prática para que a justiça seja feita com mais 
                    eficiência e agilidade.
                    Nós somos a DFGR Advogados & Associados, somos a empresa que preza pela justiça!
                    </p>
                </div>
            </div>
        </main>

 )
}