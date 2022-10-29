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
                <img src="/assets/images/logodourada.svg" alt="" />
            </header>
            <div className='div-geral'>
                <Menulateral />
                <div className='div-principal'>
                    <h1> Área do Administrador </h1>
                    <img src="/assets/images/logoapagada.svg" alt="" />
                </div>
            </div>
        </main>
    )
}