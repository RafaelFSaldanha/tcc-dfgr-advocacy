import '../../common/common.scss'
import './index.scss'

export default function Index() {
    return (
        <main className='Login-main'>
        <div className='div-bg-main'>
            <img className='logo' src='/assets/images/logodourada.svg' alt=''/>
            <div className='div-bg-input'>
               <div className='input-email'>
                <p>Email<span> *</span></p>
                <input type='email' placeholder='Insira seu email'/>
                </div>
                <div className='input-senha'>
                <p>Senha <span> *</span></p>
                <input type='password' placeholder='*********'/>
                </div>
            </div>
            <div className='error'>
            </div>
            <div className='div-bg-button'>
                <button className='entrar-button' >Entrar</button>
                <p className='cadastro-con'>Não tem uma conta ainda? <a > Cadastre-se </a></p>
            </div>
        </div>
    </main>
    )
}