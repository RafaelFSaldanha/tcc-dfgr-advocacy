import './index.scss';
import '../../common/common.scss';
import CardsLandingPage from '../../../components/cards-landingpage';
import Associados from '../../../components/associados';


export default function LandingPage() {


    return (
        <main className='landingpage'>
            <div className='cabecalho'>
                <img className='logo' src='../../../../assets/images/logodourada.svg' />
                <div className='div-links'>
                    <a className='links' href=''> Áreas de Atuação </a>
                    <a className='links' href=''> Sobre Nós </a>
                    <a className='links' href=''> Associados </a>
                </div>
            </div>
            <div className='faixa-1'>
                <div className='div-1'>
                    <div className="div-titulo-f1">
                        <h1 className='titulo'> Consultorias </h1>
                    </div>
                    <p className="tagp">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
                <img className='img-1' src='../../../assets/images/landingpage-img1.png' />
            </div>

            <section className="section-card">

                <div className='div-titulo'>
                    <p className='faixa2-titulo'>Áreas de Atuação</p>
                </div>
                <div className="div-hr">
                    <hr />
                </div>

                <div className="div-cards">
                    <CardsLandingPage />
                </div>
                <div>
                    <button className="button-faixa2">Conhecer todas as Áreas</button>
                </div>
            </section>

            <section className="section-sobrenos">
                <div className="div-img-sobrenos">
                    <img className="img-sobrenos" src="../../../assets/images/sobrenos.svg" alt="" />
                </div>
                <div className="column-div">
                    <div className="div-titulo-sobrenos">
                        <h1 className="titulo-sobrenos">Sobre Nós</h1>
                    </div>
                    <div className="div-texto-sobrenos">
                        <p className="texto-sobrenos">​Fundado em 1982, DFGR Advogados é um escritório brasileiro que pratica a advocacia com visão de negócios e foco em resultados, desenvolvendo soluções customizadas para empresas multinacionais que operam em setores estratégicos da economia.</p>
                    </div>
                    <div className="div-button-sobrenos">
                        <button className="button-sobrenos">Saiba Mais</button>
                    </div>
                </div>
            </section>

            <section className="section-associados">
                <div className="div-titulo-associados">
                <p className="titulo-associados">Associados</p>
                </div>
                <div className="div-hr">
                    <hr />
                </div>

                <div>
                    <Associados/>
                </div>

                <div className="div-button-associados">
                <button className="button-associados">Conhecer Todos os Associados</button>
                </div>
            </section>


        </main>
    )
}