import './index.scss'
import '../../common/common.scss'


export default function Index() {
    return (
        <main className='info-adv'>
            <header>
                <img src="/assets/images/logodourada.svg" alt="" />
                <div className='div-links'>
                    <img src="/assets/images/Account circle.png" alt="" />
                    <img src="/assets/images/home.png" alt="" />
                </div>
            </header>
            <div className='div-geral'>
                <div>
                    <div className='div-1'>
                        <div className='div-img'>
                            <img src="/assets/images/fred.png" alt="" />
                        </div>
                        <div className='div-cont'>
                            <div className='div-cont-1'>
                                <div className='individual'>
                                    <p className='p-t'>Nome:</p>
                                    <p className='p-p'>Fred Matheus</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Email:</p>
                                    <p className='p-p'>emailgenerico@gmail.com</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Telefone:</p>
                                    <p className='p-p'>11 93207-7414</p>
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Localização:</p>
                                    <p className='p-p'>São Paulo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-edit'>
                        <img src="/assets/images/edit-perfil.png" alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}