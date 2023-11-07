import "./Cadastro.scss"
import "../../../public/img/ambuzone.png"

export default function Cadastro(){
    document.title = "Cadastro"
    return(
        <>
        <div className="container-cadastro">
            <div className="box-azul">
                <img src="../../../public/img/ambuzone.png" alt="Logo Ambuzone" />
                <p>Bem Vindo(a) !</p>
            </div>

            <div className="box-branca">
                <div className="titulo">
                    <p>Cadastro</p>
                </div>
                <form className="form">
                    <div className="usuario">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Digite o email ou usuário" />
                    </div>

                    <div className="senha">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Digite sua senha" />
                    </div>

                    <button type="submit" className="entrar">Entrar</button>

                </form>
            </div>
        </div>
        </>
    )
}