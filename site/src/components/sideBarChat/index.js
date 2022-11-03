import './index.scss'
import '../../pages/common/common.scss'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ListarClientesChat } from '../../api/Advogadoapi';
import storage from 'local-storage'

export default function SideBar(){
    const [clientes, setClientes] = useState()
    const navigate = useNavigate();

    async function listarClientesChat() {
        const r = await ListarClientesChat();
        setClientes(r)
    }
    useEffect(() =>{
        listarClientesChat();
    }, [])
   

    return(
        <nav className="main-menu-lateral">
           <div className='menu-lateral-items'>
            <p> <div> D </div> Diego Silva Dias</p>
            </div>
            
            
        </nav>
    );
}