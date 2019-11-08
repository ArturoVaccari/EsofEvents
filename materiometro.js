console.log('SPESOMETRO')
const nomeMateria = document.querySelector('#nome-materia')
const votoMateria = document.querySelector('#voto-materia')
const cancellaBtn = document.querySelector('#btn-cancella')
const aggiungiBtn = document.querySelector('#btn-aggiungi')
const materieList = document.querySelector('#list-materie')
const mediaVoti = document.querySelector('#media-voti')

const alertController = document.querySelector('ion-alert-controller')

let mediaVotiAtt = 0
let sommaTemp = 0
let numMaterie = 0

const cancella = () => {
  nomeMateria.value = ''
  votoMateria.value = ''
}
cancellaBtn.addEventListener('click', cancella)
aggiungiBtn.addEventListener('click', () => {
  // console.log('aggiungi spesa')
  const motivoInserito = nomeMateria.value
  const importoInserito = votoMateria.value
  if (
    importoInserito <= 0
    || importoInserito.trim().length <= 0
    || motivoInserito.trim().length <= 0
    || importoInserito >= 6
  ) {
    // alert('Valori non validi')
    alertController.create({
      message: 'Perfavore inserisci valori validi, tra 1 e 5!',
      header: 'Valori non validi',
      buttons: ['Ok']
    }).then(alertElem => {
      alertElem.present()
    })
    return
  }
  console.log('SPESA: € ', motivoInserito, importoInserito)
  const nuovoElem = document.createElement('ion-item')
  nuovoElem.textContent = motivoInserito + ' ' + importoInserito
  materieList.appendChild(nuovoElem)
 // +variabileStringa la transforma in numero
 numMaterie += 1
 sommaTemp += importoInserito
 mediaVotiAtt = (sommaTemp) / numMaterie
  console.log('Totale', mediaVotiAtt)
  mediaVoti.textContent = mediaVotiAtt
  cancella()
})