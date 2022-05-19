const inputName = document.querySelector("[name='userName']");
const inputKm = document.querySelector("[name='numKm']");
const inputAge = document.getElementById('age');
const submitButton = document.getElementById('submitButton')

submitButton.addEventListener("click", function () {
    console.log(inputName.value, inputKm.value, inputAge.value);
});



const ticketPrice = inputKm * 0.21



if (age === 'Minorenne') {
    currentPrice = ticketPrice - ((ticketPrice * 20) / 100);
} else if (age === 'Over65') {
    currentPrice = ticketPrice - ((ticketPrice * 40) / 100);
}
else {
    currentPrice = ticketPrice;
}

console.log(currentPrice)










// const numKm = prompt('Quanti km durerà il viaggio?');
// console.log(numKm);

// // IL PROGRAMMA VUOLE CONOSCERE L'ETA DEL PASSEGGERO
// const age = prompt('Quanti anni hai?');
// console.log(age);

// // CALCOLIAMO IL PREZZO DEL BIGLIETTO CONSIDERATO CHE COSTA 0.21$ AL KM
// const ticketPrice = parseInt(numKm) * 0.21
// console.log(ticketPrice);

// // PONIAMO LE CONDIZIONI PER I MINORENNI CHE HANNO DIRITTO AD UNO SCONTO DEL 20% E PER GLI OVER 65 CHE HANNO UNO SCONTO DEL 40%
// if (age < 18) {
//     currentPrice = ticketPrice - ((ticketPrice * 20) / 100);
// } else if (age > 65) {
//     currentPrice = ticketPrice - ((ticketPrice * 40) / 100);
// } else {
//     currentPrice = ticketPrice;
// }

// currentPrice = currentPrice.toFixed(2);

// console.log(currentPrice);


