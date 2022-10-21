import './index.scss'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CabecalhoCliente() {
    const [usuario, setUsuario] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/login')
        }
        else{
            const usuarioLogado = storage('usuario-logado')
            setUsuario(usuarioLogado.nome)
        }
    }, [])

    function navegar() {
        navigate('/usuario/detalheperfil')
    }

    function clickArrow() {
        navigate('/usuario/home')
    }
    
    return (
        <header className='header-main'>
            <div className='img-text'>
                <img src='/assets/images/arrowleft.png' alt='' onClick={clickArrow} />
                <div className='main-bem-vindo'>Olá, seja bem-vindo Sr.{usuario} </div>
            </div>
                <div className='main-perfil'>
                    <img onClick={navegar} src='/assets/images/account-cog.png' alt=''/>
                </div>
        </header>
    )
}