import style from './Menu.module.css'
// import {NavLink} from 'react-router-dom'
import {BiSolidLocationPlus as IrIcon} from 'react-icons/bi'
import {LuStethoscope as HospitaisIcon} from 'react-icons/lu'
import {PiSirenDuotone as AmbulanciasIcon} from 'react-icons/pi'
import {BsClipboardPlusFill as DiagnosticoIcon} from 'react-icons/bs'
import {CgProfile as PerfilIcon} from 'react-icons/cg'
import { NavLink } from 'react-router-dom';

export default function Menu(){
    return(
        <nav>


                 <div className={style.menuLinks}> 
                 <NavLink to='/' activeClassName="active">
                     <IrIcon/>
                     <p>Ir</p>
                 </NavLink>
                 <NavLink  to='/hospitais'>
                     <HospitaisIcon/>
                     <p>Hospitais</p>
                 </NavLink>
                 <NavLink to='/ambulancias'>
                     <AmbulanciasIcon/>
                     <p>Ambulâncias</p>
                 </NavLink>
                 <NavLink to='/diagnostico'>
                     <DiagnosticoIcon/>
                     <p>Diagnóstico</p>    
                 </NavLink>
                 <NavLink to='/perfil'>
                     <PerfilIcon/>
                     <p>Perfil</p>    
                 </NavLink> 
             </div>
        </nav>
    )
}