// import './Menu.css'
import {Link} from 'react-router-dom'
import {BiSolidLocationPlus as IrIcon} from 'react-icons/bi'
import {LuStethoscope as HospitaisIcon} from 'react-icons/lu'
import {PiSirenDuotone as AmbulanciasIcon} from 'react-icons/pi'
import {BsClipboardPlusFill as DiagnosticoIcon} from 'react-icons/bs'
import {CgProfile as PerfilIcon} from 'react-icons/cg'


export default function Menu(){
    return(
        <nav>
            <div className='menu-links'>
                {/* <Link><IrIcon /></Link>
                <Link><HospitaisIcon /></Link>
                <Link><AmbulanciasIcon /></Link>
                <Link><DiagnosticoIcon /></Link>
                <Link><PerfilIcon /></Link>  */}
                <p>Meu menu</p>
            </div>
        </nav>
    )
}