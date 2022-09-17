import './index.scss'
import '../../common/common.scss'
import logoDourada from '../../../assets/logodourada.svg'
import logoGoogle from '../../../assets/google.svg'

export default function LoginPage() {
    return(
        <main className='Login-main'>
            <div className='div-bg-main'>
                <img className='logo' src={logoDourada}/>
                <div className='div-bg-input'>
                    <p>Email</p>
                    <input placeholder='Insira seu email'/>
                    <p>Senha</p>
                    <input placeholder='********'/>
                </div>
                <div className='div-bg-button'>
                    <button className='entrar-button'>Entrar</button>
                    <button className='google-button'> <img src={logoGoogle}/>Sign in with Google</button>
                </div>
                <p></p>
            </div>
        </main>
    );
}