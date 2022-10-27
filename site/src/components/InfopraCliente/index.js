import './index.scss'

export default function Index(props){
    return(
        <main className="main-container">
            <div className='sec'>
                <div>
                    <p className='content'>Área:</p>
                    <p>{props.consulta.area}</p>
                </div>
                <div>
                    <p className='content'>Nome do Advogado:</p>
                    <p>{props.consulta.advogado}</p>
                </div>
                <div>
                    <p className='content'>Email do Advogado:</p>
                    <p>{props.consulta.email}</p>
                </div>
                <div>
                    <p className='content'>Dia:</p>
                    <p>{props.consulta.dia && props.consulta.dia.substr(0, 10)}</p>
                </div>
                <div>
                    <p className='content'>Hora:</p>
                    <p>{props.consulta.hora && props.consulta.hora.substr(0, 10)}</p>
                </div>
                <div>
                    <p className='content'>Descrição:</p>
                    <p>{props.consulta.descricao}</p>
                </div>
            </div>
        </main> 
    )
}