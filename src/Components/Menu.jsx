// import './Menu.css'
import {Link} from 'react-router-dom'
// import {BiSolidLocationPlus} from 'react-icons/bi'
// import {LuStethoscope} from 'react-icons/lu'
// import {PiSirenDuotone} from 'react-icons/pi'
// import {BsClipboardPlusFill} from 'react-icons/bs'
import {CgProfile} from 'react-icons/cg'


export default function Menu(){
    return(
        <nav>
            <div className='menu-links'>
                {/* <Link><BiSolidLocationPlus></BiSolidLocationPlus></Link>
                <Link><LuStethoscope></LuStethoscope></Link>
                <Link><PiSirenDuotone></PiSirenDuotone></Link>
                <Link><BsClipboardPlusFill></BsClipboardPlusFill></Link>*/}
                {/* <Link><CgProfile></CgProfile></Link>  */}
                <p>Meu menu</p>
            </div>
        </nav>
    )
}