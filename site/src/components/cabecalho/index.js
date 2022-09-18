import './index.scss'
import Perfil from '../../assets/images/perfil.svg'
import storage from 'local-storage'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Cabecalho() {
    const [usuario, setUsuario] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/advogado/login')
        }
        else{
            const usuarioLogado = storage('usuario-logado')
            setUsuario(usuarioLogado.nome)
        }
    }, [])
    return (
        <header className='header-main'>
            <div className='main-bem-vindo'>Olá, seja bem-vindo Dr. {usuario} </div>
                <div className='main-perfil'>
                    <img src={Perfil}/>
                </div>
        </header>
    )
}