import './index.scss';
import '../../pages/common/common.scss';



export default function InfoAdvComp(){
    return(
        <main className="main">
        <div className='div-mae'>

            <div className='div-img'>
                <img className='img' src="/assets/images/fred.png" alt="" />
            </div>
            <div className='container'>
            <div className='div'>
                <p className='titulo'>Nome:</p>
                <p className='conteudo'>Fred Matheus de Sá Carvalho</p>
            </div>
            <div className='div'>
                <p className='titulo'>Contato:</p>
                <p className='conteudo'>emailgenerico@gmail.com</p>
                <p className='conteudo'>11 93207-7414</p>
            </div>
            <div className='div'>
                <p className='titulo'>Esquitório:</p>
                <p className='conteudo'>São Paulo</p>
            </div>
            <div className='div'>
                <p className='titulo'>Áreas de Atuação:</p>
                <p className='conteudo'>Direito Civel</p>
            </div>
        </div>
            <div className='container2'>
        <div className='div'>
                <p className='titulo'>Descrição:</p>
                <p className='conteudo'>Fluente em Português, estudei em tal lugar</p>
            </div>
        </div>
        </div>
    </main>
    )


}
