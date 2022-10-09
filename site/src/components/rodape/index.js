import './index.scss';
import '../../pages/common/common.scss';

export default function Rodape(){

    return(
        <footer className='rodape'>
            <div className='div1'>
                <img className='logo' src='/assets/images/logodourada.svg' alt='logo' />
                <p>Há mais de 30 anos trabalhando para garantir o seu direito com responsabilidade e ética.</p>
                <div className='div-social'>
                    <img src='/assets/images/facebook.png' alt='facebook' />
                    <img src='/assets/images/twitter.png' alt='twitter' />
                    <img src='/assets/images/instagram.png' alt='instagram' />
                </div>
            </div>
            <div className='div2'>
                <h2> Informações de Contato </h2>
                <h3> Email </h3>
                <p> dfgr_advogados&associados@gmail.com.br </p>
                <h3> Telefones: </h3>
                <p> (11) 5921-1924 </p>
                <p> (11) 5920-3596 </p>
            </div>
        </footer>
    )


    
}