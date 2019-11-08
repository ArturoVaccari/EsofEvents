console.log('SPESOMETRO')
const motivoSpesa = document.querySelector('#motivo-spesa')
const importoSpesa = document.querySelector('#importo-spesa')
const cancellaBtn = document.querySelector('#btn-cancella')
const aggiungiBtn = document.querySelector('#btn-aggiungi')
const speseList = document.querySelector('#list-spese')
const speseTotaliOutput = document.querySelector('#spese-totali')

const alertController = document.querySelector('ion-alert-controller')

let spesaTotale = 0


const cancella = () => {
  motivoSpesa.value = ''
  importoSpesa.value = ''
}
cancellaBtn.addEventListener('click', cancella)
aggiungiBtn.addEventListener('click', () => {
  // console.log('aggiungi spesa')
  const motivoInserito = motivoSpesa.value
  const importoInserito = importoSpesa.value
  if (
    importoInserito <= 0
    || importoInserito.trim().length <= 0
    || motivoInserito.trim().length <= 0
  ) {
    // alert('Valori non validi')
    alertController.create({
      message: 'Perfavore inserisci valori validi, non sono ammese spese a zero!',
      header: 'Valori non validi',
      buttons: ['Ok']
    }).then(alertElem => {
      alertElem.present()
    })
    return
  }
  console.log('SPESA: € ', motivoInserito, importoInserito)
  const nuovoElem = document.createElement('ion-item')
  nuovoElem.textContent = motivoInserito + ': € ' + importoInserito
  speseList.appendChild(nuovoElem)
 // +variabileStringa la transforma in numero
 spesaTotale += +importoInserito
  console.log('Totale', spesaTotale)
  speseTotaliOutput.textContent = '€ ' + spesaTotale
  cancella()
})