// INPUT
const priceKm = 0.21;
const under18 = 20;
const over65 = 40;

// ELEMENTI  UTENTE
const formElem = document.getElementById("user-form");
const nameCompleteElem = document.getElementById("name-complete");
const kmElem = document.getElementById("km");
const ageElem = document.getElementById("age");

// ELEMENTI TICKET
const sectionOutput = document.getElementById("section-output");
const ticketNameElem = document.getElementById("ticket-name-complete");
const ticketTypeElem = document.getElementById("ticket-type");
const ticketPlaceElem = document.getElementById("ticket-place");
const ticketCodeElem = document.getElementById("ticket-code");
const ticketFinalPriceElem = document.getElementById("ticket-final-price");



//  EVENTI AL CLICK DEL BOTTENE GENERA
formElem.addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault();

 sectionOutput.classList.remove("d-none");

    //  PRELEVO VALORE DEGLI ELEMENTI IMPUT
    const username = nameCompleteElem.value.trim();
    const km = kmElem.value.trim();
    const age = ageElem.value;

    // CALCOLO TIPOLOGIA E PREZZO DEL BIGLIETTO
    const priceStandard = km * priceKm;

    let typeOffer;
    let discount;

    if (age === "Minorenne") {
        discount = (priceStandard * under18) / 100;
        typeOffer = "Biglietto Under18";

    } else if (age === "Over65") {
        discount = (priceStandard * over65) / 100;
        typeOffer = "Biglietto Over65";

    } else if (age === "Maggiorenne") {
        discount = 0;
        typeOffer = "Biglietto Standard";
    }
    const resultPrice = priceStandard - discount;
    ticketNameElem.innerHTML = username;
    ticketFinalPriceElem.innerHTML = `${resultPrice.toFixed(2)} €`;
    ticketTypeElem.innerHTML = typeOffer;


// CALCOLO DEL NUMERO RANDOM DELLA CARROZZA

const numRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const resultRandom = numRandom(1,5);


ticketPlaceElem.innerHTML =  ` N. ${resultRandom}`;


// CALCOLO DEL CODICE RANDOM BIGLIETTO


});

//  EVENTI AL CLICK DEL BOTTENE ANNULLA
formElem.addEventListener("reset", function (event) {
    console.log(event);
    event.preventDefault();
    sectionOutput.classList.add("d-none");
});