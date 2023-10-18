import style from './Perfil.module.css'

export default function Perfil(){
    return(
        <main>
            <div className={style.conta}>
                <div className={style.logo}></div>
                <hr/>
                <div className={style.informacoesPessoais}>
                    <div className={style.fotoPerfil}></div>
                    <p className={style.nomeUsuario}>Nome Aleatório Para Teste</p>
                    <p className={style.emailUsuario}>emailgenerico@gmail.com</p>
                </div>
            </div>
            <div className={style.opcoesPerfil}></div>
        </main>
    )
}