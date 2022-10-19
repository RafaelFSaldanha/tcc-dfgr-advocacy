import './index.scss'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'

export default function Menulateral(){

    const navigate = useNavigate();

    async function sairClick(){
        storage.remove('advogado-logado');
        navigate('/advogado/login');
        
    }
    async function consultorias(){
        navigate('/admin/consultorias');
    }

    async function novosAssociados() {
        navigate('/admin/novosAssociados');
    }

    async function associados() {
        navigate('/admin/associados');
    }

    return(
        <nav className="main-menu-lateral">
            <div className='menu-lateral-items'>
                <div onClick={consultorias}>
                    <p> Consultorias </p>
                </div>
                <div onClick={novosAssociados}>
                    <p> Novos Associados </p>
                </div>
                <div onClick={associados}>
                    <p> Associados </p>
                </div>
            </div>
            <div onClick={sairClick} className='menu-lateral-sair'>
                <img src='/assets/images/sair.svg' alt=''/>
                <p> Sair </p>
            </div>
        </nav>
    );
}