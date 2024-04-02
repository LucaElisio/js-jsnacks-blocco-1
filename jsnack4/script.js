// * JSnack 4
// * In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.


// Dichiaro array con nomi invitati
const invited = ['luca', 'pippo' , 'pluto', 'francesco'];

// Chiedo all'utente il suo nome
const userName = prompt('Dimmi il tuo nome');

// Dichiaro variabile flag
let flag = false;

// Leggo tutti i nomi dentro l'array con ciclo for
for (let i = 0; i < invited.length; i++){

    // Condizione per controllare se il nome è uguale a quello appena letto
    if (invited[i] === userName) {
        flag = true;
        // Interrompo il ciclo appena il nome corrisponde
        break;
    }
}

// Condizione per comunicare l'esito del controllo all'utente
if (flag == true){
    console.log("può entrare");
} else {
    console.log("lei non è stato invitato");
}