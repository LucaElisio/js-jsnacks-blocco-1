// * JSnack 5
// * Crea un array vuoto.
// * Chiedi per 6 volte all'utente di inserire un numero, se è dispari inseriscilo nell'array.

// Dichiaro array vuoto
let list = [];

// Ciclo per chiedere più volte all'utente di inserire un numero
for (let i = 1; i <= 6; i++){

    // Chiedo all'utente il numero
    let userNum = parseInt(prompt("Dimmi un numero"));

    // Condizione per capire se il numero è dispari
    if (userNum % 2 != 0){
        // Se il resto è diverso da 0, il numero è dispari, e lo aggiungo all'array
        list.push(userNum);
    }
}

console.log(list);