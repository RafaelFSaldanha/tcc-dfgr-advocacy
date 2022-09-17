import './index.scss'
import '../../common/common.scss'
import logoDourada from '../../../assets/logodourada.svg'

export default function LoginPage() {
    return(
        <main className='Login-main'>
            <div className='div-bg-main'>
                <img className='logo' src={logoDourada}/>
                <div className='div-bg-input'>
                   <div className='input-email'>
                    <p>Email<span> *</span></p>
                    <input />
                    </div>
                    <div className='input-senha'>
                    <p>Senha <span> *</span></p>
                    <input />
                    </div>
                </div>
                <div className='div-bg-button'>
                    <button className='entrar-button'>Entrar</button>
                    
                </div>
                <p></p>
            </div>
        </main>
    );
}