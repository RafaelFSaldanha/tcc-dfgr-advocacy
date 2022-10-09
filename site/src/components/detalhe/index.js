import './index.scss'

export default function Index(props) {
    
    return(
        <div className='conteudo-detalhe'>
            <div className='container'>
                <div>
                    <p>Área de atuação</p>
                    <p className='resultado'>{props.consultoria.area}</p>
                </div>
                <div>
                    <p>Nome do Cliente</p>
                    <p className='resultado'>{props.consultoria.cliente}</p>
                </div>
                <div>
                    <p>Data</p>
                    <p className='resultado'>{props.consultoria.dia && props.consultoria.dia.substr(0, 10)}</p>
                </div>
                <div>
                    <p>Hora</p>
                    <p className='resultado'>{props.consultoria.hora && props.consultoria.hora.substr(0, 10)}</p>
                </div>
                <div>
                    <p>Descrição</p>
                    <p className='resultado'>{props.consultoria.descricao}</p>
                </div>
            </div>
        </div>
    )
}