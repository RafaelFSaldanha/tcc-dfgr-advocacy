import './index.scss'
import Perfil from '../../assets/images/perfil.svg'

export default function Cabecalho() {
    return (
        <header className='header-main'>
            <div className='main-bem-vindo'>Olá, seja bem-vindo Dr. Fred Matheus</div>
                <div className='main-perfil'>
                    <img src={Perfil}/>
                </div>
        </header>
    )
}