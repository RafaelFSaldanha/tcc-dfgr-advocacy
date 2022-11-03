import './index.scss';
import '../../common/common.scss';
import { useNavigate } from 'react-router-dom'
import Rodape from '../../../components/rodape'
import Atuacoes from '../../../components/atuacoes';

export default function AreaAtuacao() {

  const navigate = useNavigate();

  async function AssociadosClick() {
    navigate('/associados');
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
    <main className="landingpage">
      <div className='cabecalho-atuacao'>
        <img className='logo' src='/assets/images/logodourada.svg' alt='logo' />
        <div className='div-links'>
          <a className='links' href='' onClick={AssociadosClick}> Associados</a>
          <a className='links' href='' onClick={SobrenosClick}> Sobre Nós </a>
          <a className='links' href='' onClick={VoltarClick}> Inicio </a>
          <img className='links cadastro-image' onClick={CadastroClick} src="/assets/images/Account circle.png" alt="" />
        </div>
      </div>

      <div className="div-titulos">
        <h4 className='titulo-menor'>CONFIRA NOSSAS</h4>
        <h1 className="titulo-maior">Áreas de Atuação</h1>
      </div>
      <div className='div-hr'>
        <hr />
      </div>
      <div>
        <Atuacoes />
      </div>
      
      <Rodape/>
      
    </main>
  )
}