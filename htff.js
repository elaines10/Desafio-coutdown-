
const dataDoLancamento = new Date(2022, 10, 26)
// Variáveis: ms = milissegundos
const segundoEmMs = 1000
const minutoEmMs = segundoEmMs * 60
const horaEmMs = minutoEmMs * 60
const diaEmMs = horaEmMs * 24
var dias
var horas
var minutos
var segundos
// Funcionalidade
function fazerContagemRegressiva() {
  const diaDeHoje = new Date()
  const tempoRestanteParaOLancamentoEmMs = dataDoLancamento - diaDeHoje
  if (tempoRestanteParaOLancamentoEmMs < 0) {
    dias = "00";
    horas = "00";
    minutos = "00";
    segundos = "00";
    clearInterval(elaine)
  } else {
    // converter milissegundos para o seu respectivo tempo
   dias = String(Math.floor(tempoRestanteParaOLancamentoEmMs / diaEmMs))
   horas = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % diaEmMs) / horaEmMs)
  )
   minutos = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % horaEmMs) / minutoEmMs)
  )
   segundos = String(
    Math.floor((tempoRestanteParaOLancamentoEmMs % minutoEmMs) / segundoEmMs)
  )
  }
  document.querySelector('div').textContent = `${dias.padStart(2, '0')} : ${horas.padStart(
    2,
    '0'
  )} : ${minutos.padStart(2, '0')} : ${segundos.padStart(2, '0')}`
}
var elaine = setInterval(fazerContagemRegressiva, 1000)

 