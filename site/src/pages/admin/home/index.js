import Menulateral from '../../../components/menulateraladm'
import '../../common/common.scss'
import './index.scss'
import { useEffect } from 'react'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'

export default function Index() {

    const navigate= useNavigate()

    useEffect(()=>{
        if(!storage('admin-logado')){
            navigate('/admin/login')
        }
    },[])


    return (
        <main className='home-adm'>
            <header>
                <img className='img' src="/assets/images/logodourada.svg" alt="" />
            </header>
            <div className='div-geral'>
                <Menulateral />
                <div className='div-principal'>
                    <p className='p'> Área do Administrador </p>
                    <img className='icon' src="/assets/images/logoapagada.svg" alt="" />
                </div>
            </div>
        </main>
    )
}