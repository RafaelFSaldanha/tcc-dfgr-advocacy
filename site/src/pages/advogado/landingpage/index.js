import './index.scss';
import '../../common/common.scss';
import { useNavigate } from 'react-router-dom'
import CardsLandingPage from '../../../components/cards-landingpage';
import Associados from '../../../components/associados';
import Rodape from '../../../components/rodape'


export default function LandingPage() {

    const navigate = useNavigate();

    async function AtuacaoClick() {
        navigate('/atuacao');
    }

    async function SobrenosClick() {
        navigate('/sobrenos');
    }

    async function CadastroClick() {
        navigate('/login')
    }

    async function AssociadosClick() {
        navigate('/associados')
    }

    return (
        <main className='landingpage'>
            <div className='cabecalho-land'>
                <img className='logo' src='/assets/images/logodourada.svg' alt='logo' />
                <div className='div-links'>
                    <a className='links' href='' onClick={AtuacaoClick}> Áreas de Atuação </a>
                    <a className='links' href='' onClick={SobrenosClick}> Sobre Nós </a>
                    <a className='links' href='' onClick={AssociadosClick}> Associados </a>
                    <img className="cadastro-image links" onClick={CadastroClick} src="/assets/images/Account circle.png" alt="" />
                </div>
            </div> 
            
            <div className='faixa-1'>
                <div className='div-1'>
                    <div className="div-titulo-f1">
                        <h1 className='titulo'> Consultorias </h1>
                    </div>
                    <p className="tagp">
                        A DFGR advocacia tem como principal objetivo ajudar nossos clientes na hora que eles mais precisam, buscamos estar sempre a disposição para ajudar e defender aqueles que mais necessitam.
                    </p>
                </div>
                <img className='img-1' src='/assets/images/AdobeStock_431992476 3.svg' alt='img1' />
            </div>

            <section className="section-card">

                <div className='div-titulo'>
                    <p className='faixa2-titulo'>Áreas de Atuação</p>
                    <hr />
                </div>

                <CardsLandingPage />

                <button className="button-faixa2" onClick={AtuacaoClick}>Conhecer todas as Áreas</button>
            </section>

            <section className="section-sobrenos">
                <div className="div-img-sobrenos">
                    <img className="img-sobrenos" src="./assets/images/sobrenos.svg" alt="" />
                </div>
                <div className="column-div">
                    <h1 className="titulo-sobrenos">Sobre Nós</h1>
                    <p className="texto-sobrenos">Fundado em 1982, DFGR Advogados é um escritório brasileiro que pratica a advocacia com visão de negócios e foco em resultados, desenvolvendo soluções customizadas para empresas multinacionais que operam em setores estratégicos da economia.</p>
                    <button className="button-sobrenos" onClick={SobrenosClick}>Saiba Mais</button>
                </div>
            </section>

            <section className="section-associados">
                <div className='div-titulo'>
                    <p className='faixa2-titulo'>Associados</p>
                    <hr />
                </div>

                <div className='div-associados'>
                    <Associados />
                </div>

                <div className="div-button-associados">
                    <button className="button-associados" onClick={AssociadosClick}>Conhecer Todos os Associados</button>
                </div>
            </section>
            <Rodape />
        </main>
    )
}