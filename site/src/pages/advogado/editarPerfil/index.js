import '../../common/common.scss'
import './index.scss'

export default function EditarPerfil() {


    return (
        <main className='editar-perfil'>
            <header>
                <img src='/assets/images/logodourada.svg' alt='' />
            </header>
            <div className='div-principal'>
                <div className='conteudo'>
                    <div className='div-geral'>
                        <div className='div-upload'>
                            <img src='/assets/images/upload.png' alt='' />
                        </div>
                        <div className='div-info1'>
                            <div>
                                <p> Nome: </p>
                                <input type='text' />
                            </div>
                            <div>
                                <p> Email: </p>
                                <input type='email' />
                            </div>
                            <div>
                                <p> Telefone: </p>
                                <input type='number' />
                            </div>
                            <div>
                                <p> Localização: </p>
                                <input type='text' />
                            </div>
                            <div>
                                <p> Áreas de atuação: </p>
                                <input type='text' />
                            </div>
                        </div>
                        <div className='div-info2'>
                            <p> Descrição: </p>
                            <textarea type='text' />
                        </div>
                    </div>
                    <div className='div-check'>
                        <img src='/assets/images/check.png' alt='' />
                    </div>
                </div>
            </div>
        </main>
    )
}