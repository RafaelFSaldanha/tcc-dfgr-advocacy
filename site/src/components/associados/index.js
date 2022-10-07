import './index.scss';
import '../../pages/common/common.scss';


export default function Associados(){

    return(
        <div className='comp-associados'>
            <div className='cartao-associado'>
                <img src='/assets/images/firmino.png' alt='associado' />
                <h3> Dra. Gabriela Firmino </h3>
                <h2> Assitente Jurídica </h2>
            </div>
            <div className='cartao-associado'>
                <img src='/assets/images/fred.png' alt='associado' />
                <h3> Dr. Fred Matheus Carvalho </h3>
                <h2> Advogado </h2>
            </div>
            <div className='cartao-associado'>
                <img src='/assets/images/rafaela.png' alt='associado' />
                <h3> Dra. Rafaela Saldanha </h3>
                <h2> Assitente Jurídica </h2>
            </div>
        </div>
    )
}