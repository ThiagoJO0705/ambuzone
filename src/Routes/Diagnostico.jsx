import style from './Diagnostico.module.css'

export default function Diagnostico(){

      function handleSubmit(event) {
        event.preventDefault();
      }

    return(
        <>
            <section className={style.container}>
                <div className={style.logo}></div>
                <div>
                    <form onSubmit={handleSubmit} className={style.form}>
                        <div className={style.dados}>
                            <label htmlFor="dados">Dados do Paciente:</label>
                            <input className={style.dadosinput} type="text" id='dados' name='dados' placeholder='Digie os Dados do paciente...'/>
                        </div>

                        <div className={style.sintomas}>
                            <label htmlFor="sintomas">Sintomas:</label>
                            <textarea className={style.sintomasinput} id='sintomas' name='sintomas' placeholder='Digite os Sintomas do paciente...' cols="20" rows="5" />
                        </div>

                        <div className={style.procedimento}>
                            <label htmlFor="procedimento">Procedimento:</label>
                            <textarea className={style.procedimentoinput} id='procedimento' name='procedimento' placeholder='Digite o Pocedimento realizado...'/>
                        </div>

                        <div className={style.obs}>
                            <label htmlFor="obs">Observações:</label>
                            <textarea className={style.obsinput}  id='obs' name='obs' placeholder='Digite as Observações...'/>
                        </div>

                        <div className={style.risco}>
                            <span> Classificação de Risco:</span>
                            <input className={style.naourgente} type="radio" id='naourgente' name='risco' value="Não Urgente"/>
                            <label for="naourgente"></label>

                            <input className={style.poucourgente} type="radio" id='poucourgente' name='risco' value="Pouco Urgente"/>
                            <label for="poucourgente"></label>

                            <input className={style.urgente} type="radio" id='urgente' name='risco' value="Urgente"/>
                            <label for="urgente"></label>

                            <input className={style.muitourgente} type="radio" id='muitourgente' name='risco' value="Muito Urgente"/>
                            <label for="muitourgente"></label>

                            <input className={style.emergencia} type="radio" id='emergencia' name='risco' value="Emergência"/>
                            <label for="emergencia"></label>
                        </div>

                        <input type="submit" />
                    </form>
                </div>
            </section>
        </>
    )
}