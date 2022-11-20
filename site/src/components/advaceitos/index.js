import './index.scss'
import { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { ListarAdvAdmin2, DeletarAdvogado } from '../../api/Advogadoapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';



export default function Index () {

    const [card, setCard] = useState([]);
    const[id, setId]= useState(0)

    async function Listar(){
        const r = await ListarAdvAdmin2();
        setCard(r)

    }

    async function deletar(id, nome){
        confirmAlert({
            title: `Excluir Associado`,
            message: `Deseja Banir o ${nome} ? `,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await DeletarAdvogado(id);
                        Listar()
                        toast.success('Associado Excluido', {
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
            <tr className='conteudos-advogado-admin'>
                <div className='container'>
                    <td className='info'>{item.id}</td>
                    <td className='info'>{item.nome.substr(0,15)}...</td>
                    <td className='info'>{item.local}</td>
                    <td className='info'>{item.area}</td>
                    <td className='info'>{item.email}</td>
                    <div onClick={()=> deletar(item.id, item.nome)}>
                    <img  className='foto' src="../assets/images/deletar.png" alt="" />
                    </div>
                </div>
            </tr>
            )}
       </tbody>
    )
}