import '../../common/common.scss'
import './index.scss'
import LogoDourada from '../../../assets/images/logodourada.svg'
import LogoGoogle from '../../../assets/images/google.svg'

export default function Index() {
    return (
        <main className='tela-cadastro'>
            <div className='div-cadastro'>
                <img className='logo' src={LogoDourada} alt='logo' />
                <div className='div-inputs'>
                    <p className='nome-input'> Nome </p>
                    <input type='text' className='input' placeholder='Insira seu nome'/>
                    <p className='nome-input'> Email </p>
                    <input type='text' className='input' placeholder='Insira seu email'/>
                    <p className='nome-input'> Senha </p> 
                    <input type='text' className='input' placeholder='****' />
                    <div className='div-lembrar'>
                        <input type='checkbox' className='input-check' />
                        <p className='nome-lembrar'> Lembrar de mim </p>
                    </div>
                    <button className='botao-entrar'>
                        Entrar
                    </button>
                    <button className='botao-google'>
                        <img className='logo-google' src={LogoGoogle} alt='logo google' />
                        Entrar com Google
                    </button>
                    <p className='frase-final'> Já possue uma conta? <span className='span-final'> Entrar </span></p>
                </div>
            </div>
        </main>
    )
}