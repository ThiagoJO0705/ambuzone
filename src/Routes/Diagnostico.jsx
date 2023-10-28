  import { useState } from 'react';
  import style from './Diagnostico.module.css'
  // import { useEffect } from 'react';

  export default function Diagnostico(){
      const [dados, setDados] = useState(''); // Defina o estado inicial aqui
      const [spanErroDadosVisible, setSpanErroDadosVisible] = useState(false);
      const [sintomas, setSintomas] = useState("")
      const [spanErroSintomasVisible, setSpanErroSintomasVisible] = useState(false);
      const [procedimento, setProcedimento] = useState("")
      const [spanErroProcedimentoVisible, setSpanErroProcedimentoVisible] = useState(false);
      const [risco, setRisco] = useState("")
      const [spanErroRiscoVisible, setSpanErroRiscoVisible] = useState(false)
    
      const handleDadosChange = (event) => {
        const novoDado = event.target.value;
        setDados(novoDado);

        // Verifica o valor do campo e define a classe com base na condição
        if (novoDado.length < 3) {
          setSpanErroDadosVisible(true);
        } else {
          setSpanErroDadosVisible(false);
        }

      };

      const handleSintomasChange = (event) => {

        const sintomaInput = event.target.value
        setSintomas(sintomaInput)

        if (sintomaInput.length < 3) {
          setSpanErroSintomasVisible(true);
        } else {
          setSpanErroSintomasVisible(false);
        }
      };

      const handleProcedimentoChange = (event) => {

          const procedimentoInput = event.target.value
          setProcedimento(procedimentoInput)
    
          if (procedimentoInput.length < 3) {
            setSpanErroProcedimentoVisible(true);
          } else {
            setSpanErroProcedimentoVisible(false);
          }
        };

        
        
        const handleRiscoChange = (event) => {
  
          const novoRisco = event.target.value;
          setRisco(novoRisco);
          console.log('Valor do risco:', novoRisco);
  
          if (novoRisco !== "Não Urgente" && novoRisco !== "Pouco Urgente" && novoRisco !== "Urgente" && novoRisco !== "Muito Urgente" && novoRisco !== "Emergência")  {  
            setSpanErroRiscoVisible(true)
        
          }
        }
      function handleSubmit(event) {
        // Adicione o código para processar o envio aqui
        
        if (!risco || dados.length < 3 || sintomas.length < 3 || procedimento.length < 3) {
          event.preventDefault();
          // Pelo menos um campo está vazio ou inválido, não envie o formulário
          if (!risco) {
            setSpanErroRiscoVisible(true);
          } else {
            setSpanErroRiscoVisible(false);
          }
      
          if (dados.length < 3) {
            setSpanErroDadosVisible(true);
          } else {
            setSpanErroDadosVisible(false);
          }
      
          if (sintomas.length < 3) {
            setSpanErroSintomasVisible(true);
          } else {
            setSpanErroSintomasVisible(false);
          }
      
          if (procedimento.length < 3) {
            setSpanErroProcedimentoVisible(true);
          } else {
            setSpanErroProcedimentoVisible(false);
          }
        }
    }

      return(
          <>
              <section className={style.container}>
                  <div className={style.logo}>
                    <img src="../../public/img/ambuzonelogo.png" alt="" />
                  </div>
                  <div>
                      <form onSubmit={handleSubmit} className={style.form}>
                          <div className={style.dados}>
                              <label htmlFor="dados">Dados do Paciente*</label>
                              <input className={`${style.dadosinput} ${
                    spanErroDadosVisible ? style.erroinput : dados.length >= 3 ? style.certoinput : ''}`} type="text" id='dados' name='dados' placeholder='Digite os Dados do paciente...' value={dados} onChange={handleDadosChange} required />
                              <span id="span-dados"  className={spanErroDadosVisible ? style.errospan : style.spanescondido}>Dados insuficiente</span>
                          </div>

                          <div className={style.sintomas}>
                              <label htmlFor="sintomas">Sintomas*</label>
                              <textarea className={`${style.sintomasinput} ${
                    spanErroSintomasVisible ? style.erroinput : sintomas.length >= 3 ? style.certoinput : ''}`} id='sintomas' name='sintomas' placeholder='Digite os Sintomas do paciente...' cols="20" rows="5" value={sintomas} required onChange={handleSintomasChange} />
                              <span className={spanErroSintomasVisible ? style.errospan : style.spanescondido}>Mínimo de 3 carecteres</span>
                          </div>

                          <div className={style.procedimento}>
                              <label htmlFor="procedimento">Procedimento*</label>
                              <textarea className={`${style.procedimentoinput} ${
                    spanErroProcedimentoVisible ? style.erroinput : procedimento.length >= 3 ? style.certoinput : ''}`} id='procedimento' name='procedimento' placeholder='Digite o Pocedimento realizado...' value={procedimento} onChange={handleProcedimentoChange} required/>
                              <span className={spanErroProcedimentoVisible ? style.errospan : style.spanescondido}>Mínimo de 3 carecteres</span>
                          </div>

                          <div className={style.obs}>
                              <label htmlFor="obs">Observações</label>
                              <textarea className={style.obsinput}  id='obs' name='obs' placeholder='Digite as Observações...' value="" />
                          </div>

                          <div className={style.risco}>
                            <span>Classificação de Risco*</span>
                            <input className={style.naourgente} type="radio" id="naourgente" name="risco" value="Não Urgente" checked={risco === "Não Urgente"} onChange={handleRiscoChange}/>
                            <label htmlFor="naourgente">1</label>

                            <input className={style.poucourgente} type="radio" id="poucourgente" name="risco" value="Pouco Urgente" checked={risco === "Pouco Urgente"} onChange={handleRiscoChange}/>
                            <label htmlFor="poucourgente">2</label>

                            <input className={style.urgente} type="radio"id="urgente"name="risco"value="Urgente"checked={risco === "Urgente"}onChange={handleRiscoChange} />
                            <label htmlFor="urgente">3</label>

                            <input className={style.muitourgente} type="radio" id="muitourgente" name="risco" value="Muito Urgente" checked={risco === "Muito Urgente"} onChange={handleRiscoChange}/>
                            <label htmlFor="muitourgente">4</label>

                            <input className={style.emergencia} type="radio" id="emergencia" name="risco" value="Emergência" checked={risco === "Emergência"} onChange={handleRiscoChange}/>
                            <label htmlFor="emergencia">5</label>
                            <span className={spanErroRiscoVisible ? style.errospan : style.spanescondido}>Selecione o nivél de risco!</span>
                          </div>

                          <button type='submit'>Enviar</button>
                      </form>
                  </div>
              </section>
          </>
      )
  }