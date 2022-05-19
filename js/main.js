const inputName = document.querySelector("[name='userName']");
const inputKm = document.querySelector ("[name='numKm']");
const inputAge = document.querySelector ("[name='age']");
const submitButton = document.getElementById('submitButton')

submitButton.addEventListener("click", function () {
console.log(inputName.value, inputKm.value);
});
