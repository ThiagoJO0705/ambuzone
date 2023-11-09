import "./Login.scss"
import "../../../public/img/ambuzone.png"
import { Link } from 'react-router-dom';
import { useState } from "react";

export default function Login(){
    document.title = "Login"


    const [usuario, setUsuario] = useState({
        usuario: "",
        senha: ""
    })

    const handleUsuario = (e)=>{
        const { name, value } = e.target;

        });
    }



    return(
        <>
        <div className="container-login">
            <div className="box-azul">
                <img src="../../../public/img/ambuzone.png" alt="Logo Ambuzone" />
                <p>Bem Vindo(a) !</p>
            </div>

            <div className="box-branca">
                <div className="titulo">
                    <p>Login</p>
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

                    <div className="manter-conectado">
                        <div className="checkbox">
                            <input type="checkbox" name="conectado"/>
                            <label htmlFor="conectado">Manter conectado</label>
                        </div>
                        <p>Esqueci a senha</p>
                    </div>

                    <button type="submit" className="entrar">Entrar</button>

                    <div className="frase-cadastro">
                        <p>Ainda não tem uma conta ? <Link to="/cadastro" className="cadastro">Cadastre-se agora</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}