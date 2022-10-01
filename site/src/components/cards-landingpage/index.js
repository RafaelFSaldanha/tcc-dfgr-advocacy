import './index.scss';
import '../../pages/common/common.scss';
import Folinha from '../../assets/images/folhinha.png'


export default function CardsLandingPage() {


    return (
        <div>
            <div>
                <div className='card1'>
                    <img src={Folinha} alt="logo folhinha" />
                    <h2>Ambiental</h2>
                </div>
            </div>
        </div>
    )
}