// * JSnack 8
// * Chiedi un numero di 4 cifre all'utente e calcola la somma di tutte le cifre che compongono il numero.

// Dichiaro variabile di appoggio somma
let somma = 0;

// Dichiaro variabile globale userNum
let userNum;

// Chiedo all'utente un numero di 4 cifre, se non è di 4 cifre glie lo richiedo!
for (let i = 0;; i++){
    userNum = prompt("Dimmi un numero di 4 cifre"); //string
    if (userNum.length == 4){
        break;
    } else {
        alert("numero inserito scorretto, reinseriscilo subito!!!!")
    }
}

// Faccio la somma di tutte le cifre che compongono il numero
for (let i = 0; i < userNum.length; i++){
    somma += parseInt(userNum[i]);
}

console.log(somma);



