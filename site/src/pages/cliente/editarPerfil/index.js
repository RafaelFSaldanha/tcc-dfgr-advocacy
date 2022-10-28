import './index.scss'
import '../../common/common.scss'

export default function Index() {
    return (
        <main className='info-adv'>
            <header>
                <img src="/assets/images/logodourada.svg" alt="" />
                <div className='div-link-home'>
                    <img src="/assets/images/home.png" alt="" />
                </div>
            </header>
            <div className='div-geral'>
                <div>
                    <div className='div-1'>
                        <div className='div-img'>
                            <img src="/assets/images/upload.png" alt="" />
                        </div>
                        <div className='div-cont'>
                            <div className='div-cont-1'>
                                <div className='individual'>
                                    <p className='p-t'>Nome:</p>
                                    <input type="text" />
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Email:</p>
                                    <input type="text" />
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Telefone:</p>
                                    <input type="text" />
                                </div>
                                <div className='individual'>
                                    <p className='p-t'>Localização:</p>
                                    <input type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='div-check'>
                        <button><img src="/assets/images/check.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </main>
    )
}