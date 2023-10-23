import style from './Diagnostico.module.css'

export default function Diagnostico(){

      function handleSubmit(event) {
        // Impede o comportamento padrão de recarregar a página quando o formulário é enviado
        event.preventDefault();
    
        // Faça o que quiser com os dados do formulário aqui
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
                            <label htmlFor="risco">Classificação de Risco:</label>
                            <input className={style.naourgente} type="radio" id='risco' name='risco' value="Não Urgente"/>
                            {/* <span>Não Urgente</span> */}
                            <input className={style.poucourgente} type="radio" id='risco' name='risco' value="Pouco Urgente"/>
                            {/* <span>Pouco Urgente</span> */}
                            <input className={style.urgente} type="radio" id='risco' name='risco' value="Urgente"/>
                            {/* <span>Urgente</span> */}
                            <input className={style.muitourgente} type="radio" id='risco' name='risco' value="Muito Urgente"/>
                            {/* <span>Muito Urgente</span> */}
                            <input className={style.emergencia} type="radio" id='risco' name='risco' value="Emergência"/>
                            {/* <span>Emergência</span> */}
                        </div>

                        <input type="submit" />
                    </form>
                </div>
            </section>
        </>
    )
}