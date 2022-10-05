import './index.scss';
import '../../common/common.scss';
import CardsLandingPage from '../../../components/cards-landingpage';


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
                    <h1 className='titulo'> Consultorias </h1>
                    <div className='f-faixa1'>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <button className='button-faixa1'> Agende já </button>
                </div>
                <img className='img-1' src='../../../assets/images/landingpage-img1.png' />
            </div>

            <section className="section-card">
                
                <div className='div-titulo'>
                    <p className='faixa2-titulo'>Áreas de Atuação</p>
                </div>

                <CardsLandingPage/>
            </section>
            
        </main>
    )
}