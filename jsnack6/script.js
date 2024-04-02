// * JSnack 6
// * Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.


// Chiedo all'utente un numero
const userNum = parseInt(prompt("Dimmi un numero"));

// Stampo il cubo dei primi N numeri
for (let i = 1; i <= userNum; i++){
    console.log(Math.pow(i, 3)); 
}