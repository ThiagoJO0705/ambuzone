import style from "./Ambulancias.module.css"
import "../../../public/img/ambuzone.png"

export default function Ambulancias(){
  
  document.title = 'Ambulâncias'
  
  return(
    <>
      <div className={style.container}>
        <div className={style.boxazul}>
          <img src="../../../public/img/ambuzone.png" alt="" />
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