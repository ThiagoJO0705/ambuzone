import style from './Menu.module.css'
import {Link} from 'react-router-dom'
import {BiSolidLocationPlus as IrIcon} from 'react-icons/bi'
import {LuStethoscope as HospitaisIcon} from 'react-icons/lu'
import {PiSirenDuotone as AmbulanciasIcon} from 'react-icons/pi'
import {BsClipboardPlusFill as DiagnosticoIcon} from 'react-icons/bs'
import {CgProfile as PerfilIcon} from 'react-icons/cg'


export default function Menu(){
    return(
        <nav>
            <div className={style.menuLinks}>
                <Link to='/ir'>
                    <IrIcon/>
                    <p>Ir</p>
                </Link>
                <Link to='/hospitais'>
                    <HospitaisIcon/>
                    <p>Hospitais</p>
                </Link>
                <Link to='/ambulancias'>
                    <AmbulanciasIcon/>
                    <p>Ambulâncias</p>
                </Link>
                <Link to='/diagnostico'>
                    <DiagnosticoIcon/>
                    <p>Diagnóstico</p>    
                </Link>
                <Link to='/perfil'>
                    <PerfilIcon/>
                    <p>Perfil</p>    
                </Link> 
            </div>
        </nav>
    )
}