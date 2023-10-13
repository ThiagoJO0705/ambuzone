import './Cabecalho.css'
import { LinkHTMLAttributes } from 'react'

export default function Cabecalho(){
    return(
        <header className='cabecalho'>
            <nav>
                <h1 className='cabecalho-titulo'>Ambuzone</h1>
            
                <div className='cabecalho-links'>
                    <Link><p>Home</p></Link>
                    <Link><p>Dados Maquete</p></Link>
                    <Link><p>Geração de rotas</p></Link>
                </div>
            </nav>
        </header>
    )
}