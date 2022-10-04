import './index.scss';
import '../../pages/common/common.scss';
import Folinha from '../../assets/images/folhinha.png'
import Cível from '../../assets/images/civel.png'
import Crime from '../../assets/images/criminalista.png'


export default function CardsLandingPage() {


    return (
        <div className='div-mae'>
            <div className="div-2">
                <div className='card-fileira1'>
                    <img src={Folinha} alt="logo folhinha" />
                    <h2 className="titulo-card">Ambiental</h2>
                    <p>Nossos profissionas tem a competência de entender e defender as leis fundamentais do meio ambiente.</p>
                </div>
                <div className='card-fileira1'>
                    <img src={Cível} alt="logo folhinha" />
                    <h2 className="titulo-card">Cível</h2>
                    <p>A DFGR está altamente preparada para defender a sua relação com pessoas, objetos e materiais com os melhores profissionais do mercado.</p>
                </div>
                <div className='card-fileira1'>
                    <img src={Crime} alt="logo folhinha" />
                    <h2 className="titulo-card">Criminalista</h2>
                    <p>Nosso escritório é extremamente especializado em defender as atividades econômicas do fornecimento de bens e serviços de nossos clientes. </p>
                </div>
            </div>
        </div>
    )
}