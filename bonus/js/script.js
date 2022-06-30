/*
Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora
di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# MILESTONE 1:
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS.
Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
*/

//recupero la griglia dove inserire le celle
const grid = document.getElementById('grid');

//recupero il bottone per generare le celle
const playButton = document.getElementById('play');

//creo una funzione per creare le celle
const getCreatecell = (content) => {
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.innerText = content; 
  return cell;
}

//al click del bottone creo tot celle con un ciclo for
playButton.addEventListener("click", ()=> {
  for (let i = 1; i <= 100; i++){
    const cell = getCreatecell(i);
    grid.appendChild(cell);

    cell.addEventListener("click", (e)=>{
      e.target.classList.toggle("clicked");
      if (e.target.classList.contains("clicked")) {
        console.log(i);
      }
    })
  }
})