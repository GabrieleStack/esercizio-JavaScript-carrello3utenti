let Utente = {
    name: "Mario",
    lastName: "Bellucci",
    isAmbassador: true
}

let Utente2 = {
    name: "Giacomo",
    lastName: "Fellini",
    isAmbassador: false
}

let Utente3 = {
    name: "Paolo",
    lastName: "Santini",
    isAmbassador: false
}

let prezzi = [50, 30, 40]
let carrelloRiempito = 0
let carrelloVuoto = 0

let spedizione = 10
let spedizioneScontata = 0
let spedizioneTotale
let sconto = 0.3

//CALCOLO DEL TOTALE CARRELLO

for(i=0; i < prezzi.length;i++){
  carrelloVuoto += prezzi[i]
} console.log(carrelloVuoto);

//CALCOLO DEL CARRELLO SCONTATO SE L'UTENTE E' AMBASSADOR

if (Utente,Utente2,Utente3) {
   for(i=0; i < prezzi.length; i++){
     carrelloVuoto = prezzi[i] * (1 - sconto)
   } 
   console.log(carrelloVuoto);
} else {
   console.log(carrelloVuoto);
} 

//CALCOLO DELLA SPEDIZIONE SE SUPERI O NON SUPERI I 100$

if (carrelloVuoto < 100) {
    spedizioneTotale = spedizione
    console.log(spedizioneTotale);
} else {
  spedizioneTotale = spedizioneScontata 
    console.log(spedizioneTotale);}


//ARRAY CON STAMPA DI CONFERMA SE E'/NON E' UN AMBASSADOR

let listaDegliUtenti = []
listaDegliUtenti.push (Utente,Utente2,Utente3)

for(i = 0; i < listaDegliUtenti.length;i++) {
  
  let frase = `${listaDegliUtenti[i].name} ${listaDegliUtenti[i].lastName}`
  
  if(listaDegliUtenti[i].isAmbassador){
     frase += " non è "
  } else {
     frase += " E' "
  } frase += "un Ambassador "

  console.log(frase);
}





