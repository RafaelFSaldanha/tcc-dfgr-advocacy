import './index.scss'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cabecalho() {
    const [usuario, setUsuario] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        if(!storage('advogado-logado')){
            navigate('/advogado/login')
        }
        else{
            const usuarioLogado = storage('advogado-logado')
            setUsuario(usuarioLogado.nome)
        }
    }, [])

    function clickArrow() {
        navigate('/advogado/home')
    }
    
    return (
        <header className='header-main'>
            <div className='img-text'>
                <img src='/assets/images/arrowleft.png' alt='' onClick={clickArrow} />
                <div className='main-bem-vindo'>Olá, seja bem-vindo Dr. {usuario} </div>
            </div>
                <div className='main-perfil'>
                    <img src='/assets/images/perfil.svg' alt=''/>
                </div>
        </header>
    )
}