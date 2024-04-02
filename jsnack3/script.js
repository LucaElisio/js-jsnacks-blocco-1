// * JSnack 3
// * Il software deve chiedere per 10 volte all'utente di inserire un numero.
// * Il programma stampa la somma di tutti i numeri inseriti.


// Dichiaro variabile di appoggio dove sommare i numeri inseriti
let somma = 0;

// Chiedo all'utente 10 numeri tramite un ciclo for
for (let i = 0; i < 10; i++) {
    const userNum = parseInt(prompt("Inserisci un numero"));
    somma += userNum;
}

console.log(somma);
