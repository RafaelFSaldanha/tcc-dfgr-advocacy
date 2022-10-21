import './index.scss'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CabecalhoCliente() {
    const [cliente, setCliente] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        if(!storage('cliente-logado')){
            navigate('/login')
        }
        else{
            const usuarioLogado = storage('cliente-logado')
            setCliente(usuarioLogado.nome)
        }
    }, [])
    
    function nome() {
        const r= storage('cliente-logado')
        setCliente(r.nome)
    }

    function navegar() {
        navigate('/detalheperfil')
    }

    function clickArrow() {
        navigate('/home')
    }
    
    return (
        <header className='header-main'>
            <div className='img-text'>
                <img src='/assets/images/arrowleft.png' alt='' onClick={clickArrow} />
                <div className='main-bem-vindo'>Olá, seja bem-vindo Sr. {cliente} </div>
            </div>
                <div className='main-perfil'>
                    <img onClick={navegar} src='/assets/images/account-cog.png' alt=''/>
                </div>
        </header>
    )
}