import style from './Perfil.module.css'
import {IoMdSettings as SettingsIcon} from 'react-icons/io' 
import { Link } from 'react-router-dom'
import {BiSolidUser as DadosPessoaisIcon} from 'react-icons/bi'
import {MdNotificationsActive as NotificacoesIcon} from 'react-icons/md'
import {PiSirenFill as MinhasOcorrenciasIcon} from 'react-icons/pi'
import {BiSolidMessageAdd as MinhasConversasIcon} from 'react-icons/bi'
import {AiFillQuestionCircle as PerguntasFrequentesIcon} from 'react-icons/ai'
import {TbArrowBadgeRightFilled as SetaIcon} from 'react-icons/tb'
import "../../../public/img/ambuzone.png"
import { useEffect, useState } from 'react'



export default function Perfil(){
    document.tile = 'Perfil'
    const [storedData, setStoredData] = useState({
        nome: "",
        email: "",
    })
    useEffect(() => {
        const dataFromStorage =
          JSON.parse(sessionStorage.getItem("data-user")) ||
          JSON.parse(localStorage.getItem("data-user"));
    
        if (dataFromStorage) {
          setStoredData(dataFromStorage);
        }
      }, [])


    if(sessionStorage.getItem("token-user") || localStorage.getItem("token-user")){
        
        return(
            <main>
                <div className={style.configuracoes}><Link to='/Perfil'><SettingsIcon/></Link></div>
                <div className={style.conta}>
                    <div className={style.logo}>
                        <img src="../../../public/img/ambuzone.png" alt="" />
                    </div>
                    <hr/>
                    <div className={style.informacoesPessoais}>
                        <div className={style.fotoPerfil}><DadosPessoaisIcon/></div>
                        <p className={style.nomeUsuario}>{storedData.nome}</p>
                        <p className={style.emailUsuario}>{storedData.email}</p>
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
    } else {
        window.location = "/login"
    }
}

