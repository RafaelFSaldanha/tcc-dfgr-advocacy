import './index.scss';
import '../../common/common.scss';
import Rodape from '../../../components/rodape';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { PesquisarAssociados, ListarAssociados, buscarfoto } from '../../../api/Advogadoapi';


export default function AssociadosPage() {

    const[filtro,setFiltro]= useState('');
    const [advogado, setAdvogado] = useState([])


    async function Filtrar() {
        const resp = await PesquisarAssociados(filtro);
        setAdvogado(resp)
    }

    async function Listar() {
        const resp = await ListarAssociados();
        setAdvogado(resp)
    }
    useEffect(()=>{
        Listar();
        
    },[])


    const navigate = useNavigate();

    async function AtuacaoClick() {
        navigate('/atuacao');
    }
    async function SobrenosClick() {
        navigate('/sobrenos');
    }

    async function CadastroClick() {
        navigate('/login')
    }

    async function VoltarClick() {
        navigate('/');
    }



    return (
        <main className="main">
            <div className='cabecalho-associados '>
                <img className='logo' src='/assets/images/logodourada.svg' alt='logo' />
                <div className='div-links'>
                    <a className='links' href='' onClick={VoltarClick}> Inicio</a>
                    <a className='links' href='' onClick={SobrenosClick}> Sobre Nós </a>
                    <a className='links' href='' onClick={AtuacaoClick}> Areas de Atuação </a>
                    <img className='links cadastro-image' onClick={CadastroClick} src="/assets/images/Account circle.png" alt="" />
                </div>
            </div>

            <div className="titulo-div">
                <h1 className='h1-associado'>Nossos Associados</h1>
                <div className='row'>
                    <input value={filtro} className='input' type="text" placeholder='Pesquisar Associados...' onChange={e=> setFiltro(e.target.value)}/>
                    <img onClick={Filtrar} className="Lupa" src='/assets/images/Search.png' />
                </div>
            </div>

            <div>
            
            {advogado.map(item =>
                <div>
                    <div>
                        <img src={buscarfoto(item.foto)}/>
                     </div>
                    <div className='div-nome'>
                        <img src="/assets/images/Account circle.png" />
                        <h3>{item.nome}</h3>
                    </div>
                    <div>
                        <p>
                           {item.area}
                        </p>
                    </div>
                    <div>
                        <img src="/assets/images/telefone.png" alt="" />
                        <p>
                            {item.telefone}
                        </p>

                        <img src="/assets/images/localizacao.png" alt="" />
                        <p>
                            {item.localizacao}
                        </p>
                    </div>
                </div>
            )}
            </div>


            <div className="torne-se">
                <div>
                    <h1 className='h1-associado'>Torne-se um Associado</h1>
                </div>
                <div>
                    <button className='button-cadastro' onClick={CadastroClick}> Cadastre-se</button>
                </div>
            </div>




            <Rodape />
        </main>
    )
}