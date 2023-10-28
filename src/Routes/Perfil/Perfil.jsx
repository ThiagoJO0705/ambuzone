import style from './Perfil.module.css'
import {IoMdSettings as SettingsIcon} from 'react-icons/io' 
import { Link } from 'react-router-dom'
import {BiSolidUser as DadosPessoaisIcon} from 'react-icons/bi'
import {MdNotificationsActive as NotificacoesIcon} from 'react-icons/md'
import {PiSirenFill as MinhasOcorrenciasIcon} from 'react-icons/pi'
import {BiSolidMessageAdd as MinhasConversasIcon} from 'react-icons/bi'
import {AiFillQuestionCircle as PerguntasFrequentesIcon} from 'react-icons/ai'
import {TbArrowBadgeRightFilled as SetaIcon} from 'react-icons/tb'



export default function Perfil(){
    document.tile = 'Perfil'
    return(
        <main>
            <div className={style.configuracoes}><Link to='/Perfil'><SettingsIcon/></Link></div>
            <div className={style.conta}>
                <div className={style.logo}>
                    <img src="../../../public/img/ambuzonelogo.png" alt="" />
                </div>
                <hr/>
                <div className={style.informacoesPessoais}>
                    <div className={style.fotoPerfil}><DadosPessoaisIcon/></div>
                    <p className={style.nomeUsuario}>Fulano da Silva</p>
                    <p className={style.emailUsuario}>emailgenerico@gmail.com</p>
                </div>
            </div>
            <div className={style.containerOpcoesPerfil}>
                <h1>Minha Conta</h1>
                <div className={style.opcoesPerfil}>
                    <div className={style.conteudoOpcoesPerfil}>
                        <div className={style.descricaoConteudoOpcoesPerfil}>
                            <DadosPessoaisIcon/>
                            <p>Dados Pessoais</p>
                        </div>
                        <Link className='seta'><SetaIcon/></Link>
                    </div>
                    <hr />
                </div>
                <div className={style.opcoesPerfil}>
                    <div className={style.conteudoOpcoesPerfil}>
                        <div className={style.descricaoConteudoOpcoesPerfil}>
                            <NotificacoesIcon/>
                            <p>Notificações</p>
                        </div>
                        <Link className='seta'><SetaIcon/></Link>
                    </div>
                    <hr />
                </div>
                <div className={style.opcoesPerfil}>
                    <div className={style.conteudoOpcoesPerfil}>
                        <div className={style.descricaoConteudoOpcoesPerfil}>
                            <MinhasOcorrenciasIcon/>
                            <p>Minhas Ocorrências</p>
                        </div>
                        <Link className='seta'><SetaIcon/></Link>
                    </div>
                    <hr />
                </div>
                <div className={style.opcoesPerfil}>
                    <div className={style.conteudoOpcoesPerfil}>
                        <div className={style.descricaoConteudoOpcoesPerfil}>
                            <MinhasConversasIcon/>
                            <p>Minhas Conversas</p>
                        </div>
                        <Link className='seta'><SetaIcon/></Link>
                    </div>
                    <hr />
                </div>
                <h1>Ajuda</h1>
                <div className={style.opcoesPerfil}>
                    <div className={style.conteudoOpcoesPerfil}>
                        <div className={style.descricaoConteudoOpcoesPerfil}>
                            <PerguntasFrequentesIcon/>
                            <p>Dados Pessoais</p>
                        </div>
                        <Link className='seta'><SetaIcon/></Link>
                    </div>
                    <hr />
                </div>
            </div>
        </main>
    )
}

