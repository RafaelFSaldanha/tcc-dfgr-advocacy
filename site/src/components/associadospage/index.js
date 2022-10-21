import './index.scss';
import '../../pages/common/common.scss';


export default function Associadospage(){

    return(
        <main className='div-mae'>
            <div>
                <img src='/assets/images/fredu.png'/>
            </div>
            <div className='div-nome'>
                <img src="/assets/images/Account circle.png"/>
                <h3>Fred Matheus</h3>
            </div>
            <div>
                <p>
                    Direito civel, Ambiental e Tribútario 
                </p>
            </div>
            <div>
                <img src="/assets/images/telefone.png" alt="" />
                <p>
                    11 930277414
                </p>

                <img src="/assets/images/localizacao.png" alt="" />
                <p>
                    São Paulo
                </p>
            </div>
        </main>
    )
}