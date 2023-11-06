export default function Login(){
    document.title = "Login"
    return(
        <>
        <div>
            <form>
                <div>
                    <label htmlFor="usuario">Usuário</label>
                    <input type="text" name="usuario" placeholder="Digite o email ou usuário" />
                </div>

                <div>
                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Digite sua senha" />
                </div>

                <button>Enviar</button>
            </form>
        </div>
        </>
    )
}