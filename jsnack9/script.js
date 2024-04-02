// * JSnack 9
// * Calcola la somma e la media dei primi 10 numeri.

// Definisco variabile con numero totale di numeri
const totalNum = 10;

// Definisco variabile somma
let somma = 0;


// Ciclo per fare la somma dei numeri
for (let i = 1; i <= totalNum; i++){
    somma += i;
}

// Stampo la somma
console.log(somma);

// Faccio la media
const media = somma / totalNum;
console.log(media);