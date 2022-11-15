import './index.scss'
import '../../common/common.scss'

export default function Index() {


    
    return (
        <main className='info-adv'>
            <header>
                <img src="/assets/images/logodourada.svg" alt="" />
                <div className='div-links'>
                    <a href=""> Voltar </a>
                    <a href=""> Início </a>
                </div>
            </header>
            <div className='div-geral'>
                <h1> Profissional </h1>
                <div>
                    <div className='div-1'>
                        <div className='div-img'>
                            <img className='img-adv' src="/assets/images/fred.png" alt="" />
                        </div>
                        <div className='div-cont'>
                            <div className='div-cont-1'>
                                <div className='individual'>
                                    <p className='p-t'>Nome:</p>
                                    <p className='p-pp'>Fred Matheus</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Contato:</p>
                                    <p className='p-pp'>emailgenerico@gmail.com</p>
                                    <p className='p-pp'>11 93207-7414</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Escritório:</p>
                                    <p className='p-pp'>São Paulo</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Áreas de atuação:</p>
                                    <p className='p-pp'>Direito Civel</p>
                                    <p className='p-pp'>Direito Familiar</p>
                                </div>
                            </div>
                            <div className='div-cont-2'>
                                <div className='individual'>
                                    <p className='p-t'>Descrição:</p>
                                    <p className='p-p'>Fluente em Português estudei em tal lugar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-chat'>
                        <img src="/assets/images/Chat.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}