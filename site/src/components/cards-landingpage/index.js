import './index.scss';
import '../../pages/common/common.scss';



export default function CardsLandingPage() {


    return (
        <div className='div-mae'>
            <div className="div-2">
                <div className='card-fileira1'>
                    <div className="div">
                        <img src='../../../assets/images/folinha.png' alt="" />
                    </div>
                    <h2 className="titulo-card">Ambiental</h2>
                    <p>Nossos profissionas tem a competência de entender e defender as leis fundamentais do meio ambiente.</p>
                </div>
                <div className='card-fileira1'>
                    <div className="div">
                        <img src='../../../assets/images/civel.png' alt="" />
                    </div>
                    <h2 className="titulo-card">Cível</h2>
                    <p>A DFGR está altamente preparada para defender a sua relação com pessoas, objetos e materiais com os melhores profissionais do mercado.</p>
                </div>
                <div className='card-fileira1'>
                    <div className="div">
                        <img src='../../../assets/images/criminalista.png' alt="" />
                    </div>
                    <h2 className="titulo-card">Criminalista</h2>
                    <p>Nosso escritório é extremamente especializado em defender as atividades econômicas do fornecimento de bens e serviços de nossos clientes. </p>
                </div>
            </div>

            <div className="div-2">
                <div className='card-fileira1'>
                    <div className="div">
                        <img src='../../../assets/images/tributario.png' alt="" />
                    </div>
                    <h2 className="titulo-card">Tributário</h2>
                    <p>Fiscalizar e determinar a arrecadação de impostos e taxas de juros também é por nossa conta.</p>
                </div>
                <div className='card-fileira1'>
                    <div className="div">
                        <img src='../../../assets/images/imobiliario.png' alt="" />
                    </div>
                    <h2 className="titulo-card">Imobiliário</h2>
                    <p>Conte com nosso escritório completo de serviços para proteger e gerenciar seus bens, além de uma assessoria especializada na compra e venda de imóveis.</p>
                </div>
                <div className='card-fileira1'>
                    <div className="div">
                        <img src='../../../assets/images/familiar.png' alt="" />
                    </div>
                    <h2 className="titulo-card">Familiar</h2>
                    <p>Nosso escritório também possui profissionais altamente qualificados para ajudar nossos clientes em relações familiares</p>
                </div>
            </div>
        </div>
    )
}