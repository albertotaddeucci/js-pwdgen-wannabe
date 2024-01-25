// dichiarazione/creazione prima variabile
let fullName
fullName = prompt("Scrivi il tuo nome");

// dichiarazione/creazione seconda variabile
let surname
surname = prompt ("Scrivi il tuo cognome");

// dichiarazione/creazione terza variabile
let favouriteColor
favouriteColor = prompt("Qual è il tuo colore preferito?");

// print password a schermo
document.getElementById("password").innerHTML = 
    `${fullName}${surname}${favouriteColor}23`
;

// print recap a schermo
document.getElementById("recap").innerHTML = 
    `Nome inserito: <i>${fullName}</i> <br>
    Cognome inserito: <i>${surname}</i> <br>
    Colore preferito inserito: <i>${favouriteColor}</i>`
;