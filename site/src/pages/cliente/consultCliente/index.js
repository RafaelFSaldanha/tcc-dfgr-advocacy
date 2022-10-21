import './index.scss'
import '../../common/common.scss'

export default function Index() {
    return (
        <main className='info-adv'>
            <header className='header-consultar'>
                <img src="/assets/images/logodourada.svg" alt="" />
                <div className='div-links'>
                    <a href=""> Voltar ao perfil </a>
                    <a href=""> Início </a>
                    <img src="/assets/images/config.png" alt="" />
                </div>
            </header>
            <div className='div-geral'>
                <h1> Consultorias agendadas </h1>
                <div className='div-tit'>
                    <div className='div-ind'>
                        <p>Tipo de Consultoria</p>
                    </div>
                    <div className='div-ind'>
                        <p>Advogado</p>
                    </div>
                    <div className='div-ind'>
                        <p>Data e Hora</p>
                    </div>
                    <div className='div-ind'>
                        <p>Email</p>
                    </div>
                </div>
                <div className='div-consultar'>
                    <div className='div-ind'>
                        <p>Ambiental</p>
                    </div>
                    <div className='div-ind'>
                        <p>Dr. Firmino</p>
                    </div>
                    <div className='div-ind'>
                        <p>10/10/2022 18:00</p>
                    </div>
                    <div className='div-ind'>
                        <p>emailgenerico@gmail.com</p>
                    </div>
                </div>
                <div className='div-consultar'>
                    <div className='div-ind'>
                        <p>Ambiental</p>
                    </div>
                    <div className='div-ind'>
                        <p>Dr. Firmino</p>
                    </div>
                    <div className='div-ind'>
                        <p>10/10/2022 18:00</p>
                    </div>
                    <div className='div-ind'>
                        <p>emailgenerico@gmail.com</p>
                    </div>
                </div>
                <div className='div-consultar'>
                    <div className='div-ind'>
                        <p>Ambiental</p>
                    </div>
                    <div className='div-ind'>
                        <p>Dr. Firmino</p>
                    </div>
                    <div className='div-ind'>
                        <p>10/10/2022 18:00</p>
                    </div>
                    <div className='div-ind'>
                        <p>emailgenerico@gmail.com</p>
                    </div>
                </div>
            </div>
        </main>
    )
}