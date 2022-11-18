import './index.scss'

export default function Index(props){
    return(
        <main className="main-container">
            <div className='sec'>
                <div>
                    <p className='content-info'>Área:</p>
                    <p>{props.consulta.area}</p>
                </div>
                <div>
                    <p className='content-info'>Nome do Advogado:</p>
                    <p className='content-info-desc'>{props.consulta.advogado}</p>
                </div>
                <div>
                    <p className='content-info'>Email do Advogado:</p>
                    <p className='content-info-desc'>{props.consulta.email}</p>
                </div>
                <div>
                    <p className='content-info'>Dia:</p>
                    <p>{props.consulta.dia && props.consulta.dia.substr(0, 10)}</p>
                </div>
                <div>
                    <p className='content-info'>Hora:</p>
                    <p>{props.consulta.hora && props.consulta.hora.substr(0, 10)}</p>
                </div>
                <div>
                    <p className='content-info'>Descrição:</p>
                    <p className='content-info-desc'>{props.consulta.descricao}</p>
                </div>
            </div>
        </main> 
    )
}