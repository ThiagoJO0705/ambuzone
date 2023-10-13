import './Cabecalho.css'
import { LinkHTMLAttributes } from 'react'
import {FaLocationDot} from 'react-icons'
import {LuStethoscope} from 'react-icons'
import {PiSirenDuotone} from 'react-icons'
import {BsClipboardPlusFill} from 'react-icons'
import {CgProfile} from 'react-icons'


export default function Menu(){
    return(
        <nav>
            <div className='menu-links'>
                <Link><FaLocationDot></FaLocationDot></Link>
                <Link><LuStethoscope></LuStethoscope></Link>
                <Link><PiSirenDuotone></PiSirenDuotone></Link>
                <Link><BsClipboardPlusFill></BsClipboardPlusFill></Link>
                <Link><CgProfile></CgProfile></Link>
                <p>Meu menu</p>
            </div>
        </nav>
    )
}