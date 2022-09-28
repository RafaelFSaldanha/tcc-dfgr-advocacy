import './index.scss';
import Deletar from '../../assets/images/deletar.png'
import Alterar from '../../assets/images/editar.png'

export default function Index () {
    return (
        <main>
            <div className='conteudo'>
                <div className='dados'>
                    <p> Tipo de Consultoria </p>
                    <div className='dado'>

                    </div>
                </div>
                <div className='dados'>
                    <p> Nome do Cliente </p>
                    <div className='dado'>

                    </div>
                </div>
                <div className='dados'>
                    <p> Data e Hora </p>
                    <div className='data-hora'>
                        <div className='data'>

                        </div>
                        <div className='hora'>

                        </div>
                    </div>
                </div>
                <div className='dado-desc'>
                    <p> Nome do Cliente </p>
                    <div className='dado'>

                    </div>
                </div>
                <div className='icones'>
                    <img className='icone' src={Deletar} alt='deletar' />
                    <img className='icone' src={Alterar} alt='editar' />
                </div>
            </div>
        </main>
    )
}