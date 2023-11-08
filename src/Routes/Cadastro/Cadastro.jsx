import "./Cadastro.scss"
import "../../../public/img/ambuzone.png"
import { useState } from "react"

export default function Cadastro(){
    document.title = "Cadastro"

    const [spanErroNomeVisible, setSpanErroNomeVisible] = useState(false);
    const [spanErroUsuarioVisible, setSpanErroUsuarioVisible] = useState(false);
    const [spanErroEmailVisible, setSpanErroEmailVisible] = useState(false);
    const [spanErroSenhaVisible, setSpanErroSenhaVisible] = useState(false);


    // Adicionando o id automaticamente
    let id;
    
    fetch("http://localhost:5001/usuarios")
    .then((response)=> response.json())
    .then((response)=>{
        id = response[response.length-1].id+1
    })
    .catch(error=> console.log(error));
    
    const [cadastro, setCadastro] = useState({
        id:id,
        nome: "",
        usuario: "",
        email: "",
        senha: ""
    })

    const handleChange = (e)=>{
        const emailRegex = new RegExp(
            // Exemplo de email valido -> usuario123@host.com.br
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z{2,}$]/
        );
        //Destructuring
        const {name,value} = e.target;
      //Setando os dados diretamente no objeto atravé de SPREAD
        setCadastro({...cadastro,[name]:value});

        if (name === "nome" && cadastro.nome.length < 3){
            setSpanErroNomeVisible(true);
            console.log(cadastro)
        } else {
            setSpanErroNomeVisible(false)
        }
        
        if (name === 'usuario' && value.length < 3){
            setSpanErroUsuarioVisible(true);
            console.log(cadastro)
        } else {
            setSpanErroUsuarioVisible(false)
        } 
        if (emailRegex.test(cadastro.email)){
            setSpanErroEmailVisible(true);
            console.log(cadastro)
        } else {
            setSpanErroEmailVisible(false)
        }
        
        if (name === 'senha' && value.length < 5){
            setSpanErroSenhaVisible(true);
            console.log(cadastro)
        } else {
            setSpanErroSenhaVisible(false)
        }
        
        }


      const handleSubmit = (e) =>{
        e.preventDefault();
     
          fetch("http://localhost:5001/usuarios",{
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body: JSON.stringify(cadastro)
          })
          .then((response)=> console.log("Dados cadastrados com sucesso - STATUS CODE : " + response.status))
          .catch(error=> console.log(error));
        }
    


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
                <form className="form" onSubmit={handleSubmit}>
                    <div className="nome">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" placeholder="Digite seu nome completo" value={cadastro.nome} onChange={handleChange} />
                        <span className={spanErroNomeVisible ? "errospan" : "spanescondido"}>Mínimo de 3 caracteres !</span>
                    </div>

                    <div className="usuario">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" name="usuario" placeholder="Digite um nome de usuário" value={cadastro.usuario} onChange={handleChange} />
                        <span className={spanErroUsuarioVisible ? "errospan" : "spanescondido"}>Mínimo de 3 caracteres !</span>
                    </div>

                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" placeholder="Digite seu email" value={cadastro.email} onChange={handleChange} />
                        <span className={spanErroEmailVisible ? "errospan" : "spanescondido"}>Email inválido</span>
                    </div>

                    <div className="senha">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" placeholder="Digite sua senha" value={cadastro.senha} onChange={handleChange} />
                        <span className={spanErroSenhaVisible ? "errospan" : "spanescondido"}>Mínimo de 5 caracteres !</span>
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