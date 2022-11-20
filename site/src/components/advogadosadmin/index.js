import './index.scss'
import { useState, useEffect } from 'react';
import { ListarAdvAdmin, AlterarSit, DeletarAdvogado } from '../../api/Advogadoapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { confirmAlert } from 'react-confirm-alert';


export default function Index () {

    const [card, setCard] = useState([]);

    async function Listar(){
        const r = await ListarAdvAdmin();
        setCard(r)

    }

    async function Aceito(id, nome) {
        confirmAlert({
            title: `Aceitar novo Associado`,
            message: `Deseja aceitar o ${nome} ? `,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await AlterarSit(id);
                        Listar()
                        toast.success('Temos um novo associado!', {
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

    async function Recusado(id, nome) {
        confirmAlert({
            title: `Recusar novo Associado`,
            message: `Deseja recusar o ${nome} ? `,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await DeletarAdvogado(id);
                        Listar()
                        toast.success('Advogado recusado', {
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
        theme="dark"
        style={{width: '16em'}}/>
        {card.map(item =>
            <tr className='conteudos-advogado-admin '>
                <div className='container'>
                    <td className='info'>{item.nome.substr(0,15)}...</td>
                    <td className='info'>{item.oab}</td>
                    <td className='info'>{item.local}</td>
                    <td className='info'>{item.email}</td>
                    <img onClick={()=>Aceito(item.id, item.nome)} className='foto' src="../assets/images/Checkmark.png" alt="" />
                    <img onClick={()=>Recusado(item.id, item.nome)} className='foto' src="/assets/images/deletar.png" alt="" />
                </div>
            </tr>
            )}
       </tbody>
    )
}