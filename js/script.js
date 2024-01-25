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
    `La tua password è: 
        ${fullName}${surname}${favouriteColor}23`
;

// print recap a schermo
document.getElementById("recap").innerHTML = 
    `Nome inserito: ${fullName} <br>
    Cognome inserito: ${surname} <br>
    Colore preferito inserito: ${favouriteColor}`
;