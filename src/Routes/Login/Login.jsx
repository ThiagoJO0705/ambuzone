import "./Login.scss"
import "../../../public/img/ambuzone.png"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function Login(){
    document.title = "Login"



    const navigate = useNavigate();

    //USE-STATE QUE VAI ARMAZENAR OS DADOS DO FORM.
    const [usuario,setUsuario] = useState({
        email: "",
        usuario: "",
        senha: ""
    })

    //PREENCHIMENTO DO FORM
    const handleChange = (e)=>{
        //DESTRUCTURING NOS CAMPOS DO FORM(NAME,INPUT).
        const {name,value} = e.target;
        //PREENCHENDO O USE-STATE COM OS VALORES DA DESESTRUTURAÇÃO, UTILIZANDO O OPERADOR SPREAD.
        setUsuario({...usuario,[name]:value});
        console.log(usuario)
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();

        let users;
        let user;
        try {
            const response = await fetch("http://localhost:5001/usuarios");
            users = await response.json();
            
        } catch (error) {
            alert("Ocorreu um erro no processamento da sua solicitação!");    
        }

        //REALIZANDO A VALIDAÇÃO DO USUÁRIO.
        for (let x = 0; x < users.length; x++) {
                user = users[x];
            //REALIZANDO A COMPARAÇÃO DE FATO!
            if(user.email == usuario.email && user.senha == usuario.senha){
                alert("Login realizado com SUCESSO!")

                //Criando a autenticação:
                //Criando o token do usuário
                const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2)
                console.log(tokenUser);
                
                //Criando o SessionStorage
                sessionStorage.setItem("token-user",tokenUser);
                //Adicionando os dados do Usuário na sessão:
                sessionStorage.setItem("data-user", JSON.stringify(user));

                //REDIRECIONANDO O USUÁRIO PARA A PÁGINA HOME!
                navigate("/");
                return; 
            }
        }

        alert("Login ou senha incorretos!")
        setUsuario({
            email:"",
            senha:""
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
                <form className="form" onSubmit={handleSubmit}>
                    <div className="usuario">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Digite o email ou usuário" value={usuario.usuario} onChange={handleChange} />
                    </div>

                    <div className="senha">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Digite sua senha"  value={usuario.senha} onChange={handleChange}/>
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