import './index.scss';
import '../../common/common.scss';

export default function PerfilAdvogado() {


    return (
        <main className='detalhe-perfil'>
            <header>
                <img className='logo' src='/assets/images/logodourada.svg' alt=''/>
                <div className='conteudo-header'>
                    <a> Agendamentos </a>
                    <a> Conversas </a>
                    <img src='/assets/images/home.png' alt='' />
                </div>
            </header>
            <div className='div-principal'>
                <h1> Meu Perfil </h1>
                <div className='conteudo'>
                    <div className='div-foto'>
                        <img className='foto' src='/assets/images/fred.png' alt='' />
                    </div>
                    <div className='principal-conteudo'>
                        <div className='conteudo-adv'>
                            <div className='div-conteudo'>
                                <div className='individual'>
                                    <p className='p-titulo'> Nome: </p>
                                    <p> Fred Matheus de Sá Carvalho </p>
                                </div>
                                <div className='individual'>
                                    <p className='p-titulo'> Contato: </p>
                                    <p> emailgenerico@gmail.com </p>
                                    <p> 11 93207-7414 </p>
                                </div>
                                <div className='individual'>
                                    <p className='p-titulo'> Localização: </p>
                                    <p> São Paulo </p>
                                </div>
                                <div className='individual'>
                                    <p className='p-titulo'> Número da OAB: </p>
                                    <p> 12345678 </p>
                                </div>
                            </div>
                            <div className='div-conteudo'>
                                <div className='individual'>
                                    <p className='p-titulo'> Áreas de atuação: </p>
                                    <p> Direito Civel </p>
                                </div>
                                <div className='individual'>
                                    <p className='p-titulo'> Descrição: </p>
                                    <p> Fluente em Português estudei em tal lugar </p>
                                </div>
                            </div>
                        </div>
                        <div className='div-lapis'>
                            <img src='/assets/images/edit-perfil.png' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}