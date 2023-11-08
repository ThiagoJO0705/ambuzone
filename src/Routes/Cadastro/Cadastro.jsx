import "./Cadastro.scss"
import "../../../public/img/ambuzone.png"

export default function Cadastro(){
    document.title = "Cadastro"
    return(
        <>
        <div className="container-cadastro">
            <div className="box-azul">
                <img src="../../../public/img/ambuzone.png" alt="Logo Ambuzone" />
            </div>

            <div className="box-branca">
                <div className="titulo">
                    <p>Cadastro</p>
                </div>
                <form className="form">
                    <div className="nome">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" placeholder="Digite seu nome completo" />
                    </div>

                    <div className="usuario">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Digite um nome de usuário" />
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Digite seu email" />
                    </div>

                    <div className="senha">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Digite sua senha" />
                    </div>

                    <button type="submit" className="entrar">Cadastrar</button>

                    <div className="frase">
                        <p>Ao criar uma conta, declaro que li e aceito os Termos de Uso e a Política de Privacidade</p>
                    </div>

                </form>
            </div>
        </div>
        </>
    )
}