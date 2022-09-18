import MenuLateral from '../../../components/menulateral/index.js';
import Cabecalho from '../../../components/cabecalho/index.js';
import './index.scss'


export default function Agendar(){
    return(
        <main className="main-agendar">
            <MenuLateral />
            <div className='container'>
                <Cabecalho />
                <div className='conteudo'>
                    <div className="conteudo-div-principal">
                        <div>
                            <p>Nome do Cliente</p>
                            <input></input>
                        </div>
                        <div>
                            <p>Tipo de Consultoria</p>
                            <select></select>
                        </div>
                        <div>
                            <p className='data-titulo'>Data e Hora</p>
                            <div className='data-hora'>
                            <input className="data" type="date"></input>
                            <input className='hora' type='time'></input>
                            </div>
                        </div>
                        <div>
                            <p>Descrição</p>
                            <textarea></textarea>
                        </div>
                        <button> Agendar </button>
                    </div>
                    
                </div>
            </div>
        </main>
    );
}