import './index.scss';
import '../../pages/common/common.scss';

export default function CardsLandingPage() {

    return (
    
        <main className='comp-card'>
            <div className='div-fileira'>
                <div className='div-card'>
                    <div>
                        <img className='img-ambiental' src='/assets/images/Group 4.svg' alt="" />
                        <h2 className='h2-ambiental'>Ambiental</h2>
                    </div>
                    <p>Nossos profissionas tem a competência de entender e defender as leis fundamentais do meio ambiente.</p>
                </div>
                <div className='div-card'>
                    <div>
                        <img className='img' src='/assets/images/civel.png' alt="" />
                        <h2 >Cível</h2>
                    </div>
                    <p>A DFGR está altamente preparada para defender a sua relação com pessoas, objetos e materiais com os melhores profissionais do mercado.</p>
                </div>
                <div className='div-card'>
                    <div>
                        <img className='img' src='/assets/images/criminalista.png' alt="" />
                        <h2 >Criminalista</h2>
                    </div>
                    <p>Nosso escritório é extremamente especializado em defender as atividades econômicas do fornecimento de bens e serviços de nossos clientes. </p>
                </div>
            </div>
            <div className='div-fileira'>
                <div className='div-card'>
                    <div>
                        <img className='img' src='/assets/images/tributario.png' alt="" />
                        <h2 >Tributário</h2>
                    </div>
                    <p>Fiscalizar e determinar a arrecadação de impostos e taxas de juros também é por nossa conta.</p>
                </div>
                <div className='div-card'>
                    <div>
                        <img className='img' src='/assets/images/imobiliario.png' alt="" />
                        <h2 >Imobiliário</h2>
                    </div>
                    <p>Conte com nosso escritório completo de serviços para proteger e gerenciar seus bens, além de uma assessoria especializada na compra e venda de imóveis.</p>
                </div>
                <div className='div-card'>
                    <div>
                        <img className='img' src='/assets/images/familiar.png' alt="" />
                        <h2 >Familiar</h2>
                    </div>
                    <p>Nosso escritório também possui profissionais altamente qualificados para ajudar nossos clientes em relações familiares</p>
                </div>
            </div>
        </main>
    )
}