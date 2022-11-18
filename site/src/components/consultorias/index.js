import './index.scss';
import { useState, useEffect } from 'react';
import storage from 'local-storage';
import { ListarConsultorias, Deletar } from '../../api/Advogadoapi';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export default function Index () {

    const [card, setCard] = useState([]);
    const navigate = useNavigate();

    async function Listar(){
        const Advogado = storage('advogado-logado');
        const r = await ListarConsultorias(Advogado.idAdvogado);
        setCard(r)

    }

    

    async function remover(id, nome) {
        confirmAlert({
            title: `Cancelar Consultoria`,
            message: `Deseja cancelar a consulta com o ${nome} ? `,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await Deletar(id);
                        Listar()
                        toast.success('Cancelada com sucesso', {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            });
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }

    function informacoes(id) {
        navigate(`/advogado/informacoes/${id}`)
    }

    useEffect(() =>{
        Listar();
    
    }, [])
    


    
    return (
        
       <tbody>
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
        {card.map(item =>
            <tr className='conteudos-agendadas'>
            
                    <td className='info'>{item.area}</td>
                    <td className='info'>{item.cliente}</td>
                    <td className='info'>{item.dia.substr(0, 10)}|{item.hora.substr(0, 5)}</td>
                    <div className='div'>
                    <td className='botao'><img onClick={()=> remover(item.id,item.cliente)} className='foto' src="/assets/images/deletar.png" alt="" /></td>
                    <td className='botao'><img onClick={()=> informacoes(item.id)} className='foto-2' src="/assets/images/Information.svg" alt="" /></td>
                    </div>

            </tr>
            
            )}

    
        

       </tbody>
    )
}