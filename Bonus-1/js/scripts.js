// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro:
// avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array
// fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l'immagine attiva, che quindi verrà visualizzata al posto della precedente.
// Prima di partire a scrivere codice:
// Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre,
//  cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa
//  andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'
//  esercizio.
// Consigli del giorno:
// 1. Costruiamo del carosello una versione statica contenente solamente un'immagine. Di questa versione statica al
// momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo
// quindi usarli come "template".
// 2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// 3. Al momento giusto (ihihhi starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"



const imgList = [
  "./img/01.webp",
  "./img/02.webp",
  "./img/03.webp",
  "./img/04.webp",
  "./img/05.webp",
];

let card = document.getElementById("container");
console.log("Card", card, typeof card);
let elImg = "";

 for (let i = 0; i < imgList.length; i++) {
   if (i == 0) {
     elImg += `
     <div id="item-${[i]}" class="item active">
         <img src="${imgList[i]}"> 
     </div>`;
   } else {
     elImg += `
   <div id="item-${[i]}" class="item">
     <img src="${imgList[i]}"> 
   </div>`;
   }
 }
 card.innerHTML += elImg;




let counter = 0
let next = document.getElementById("next");
let prev = document.getElementById("prev");

console.log(next)



next.addEventListener("click", function(){
  
  let currentCounter = 'item-'+ counter;
  let item = document.getElementById(currentCounter);
  item.classList.remove('active')
  
  counter++
  if (counter ==5 ){
    counter = 0
  }

  let nextCount = 'item-' + counter
  item = document.getElementById(nextCount);
  item.classList.add('active')
 })
  




prev.addEventListener("click", function () {
  let currentCounter = "item-" + counter;

  let item = document.getElementById(currentCounter);
  item.classList.remove("active");

  counter--;
  if (counter == -1){
    counter = 4;
  }
  let nextCount = "item-" + counter;
  item = document.getElementById(nextCount);
  item.classList.add("active");
});
