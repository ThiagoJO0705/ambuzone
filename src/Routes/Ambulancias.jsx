import style from "./Ambulancias.module.css"

export default function Ambulancias(){

  return(
    <>
      <div className={style.container}>
        <div className={style.boxazul}>
        <div className={style.logo}>
          <img src="../../public/img/ambuzonelogo.png" alt="" />
        </div>
        </div>
        <div className={style.boxbranca}>
          <div className={style.ambativas}>
            <h1>Ambulâncias Ativas:</h1>
            <p>672 Ambulâncias.</p>
          </div>
          <div className={style.ambdisponiveis}>
            <h1>Ambulâncias Disponíveis:</h1>
            <p>388 Ambulâncias.</p>
          </div>
          <div className={style.ambocorrencias}>
            <h1>Em Ocorrência:</h1>
            <p>284 Ambulâncias.</p>
          </div>
          <div className={style.ocorrencias}>
            <h1>Ocorrências do Dia:</h1>
            <p>427 Ocorrências.</p>
          </div>
        </div>
      </div>
    </>
  )
}