
// Esercizio di oggi: Autoplay su Carousel Mono Array

// Riprendete l'esercizio del carosello e aggiungete la funzionalità di autoplay:
// Quando si carica la pagina, le slide iniziano a scorrere da sole ogni 3 secondi

// BONUS

// Aggiungere il "ciclo infinito" sul carosello (cioè dall'ultima slide passo alla prima e viceversa)
// Aggiungere un pulsante per fermare l'avanzamento automatico



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
let stop = document.getElementById("stop");

stop.addEventListener("click", function(){
  clearInterval(interval);
})

console.log(next)

let interval = setInterval(myFunction, 3000);
console.log('id intervallo' + interval)


 function myFunction() {
   let currentCounter = "item-" + counter;
   let item = document.getElementById(currentCounter);
   item.classList.remove("active");
 
   counter++;
   if (counter == 5) {
     counter = 0;
   }

   let nextCount = "item-" + counter;
   item = document.getElementById(nextCount);
   item.classList.add("active");
 }


next.addEventListener("click", function () {
  let currentCounter = "item-" + counter;
  let item = document.getElementById(currentCounter);
  item.classList.remove("active");

  counter++;
  if (counter == 5) {
    counter = 0;
  }

  let nextCount = "item-" + counter;
  item = document.getElementById(nextCount);
  item.classList.add("active");
});

 
  




prev.addEventListener("click", function () {
  let currentCounter = "item-" + counter;

  let item = document.getElementById(currentCounter);
  item.classList.remove("active");

  counter--;
  if (counter == -1) {
    counter = 4;
  }
  let nextCount = "item-" + counter;
  item = document.getElementById(nextCount);
  item.classList.add("active");
  
});
