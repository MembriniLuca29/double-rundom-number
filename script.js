const firstButton = document.getElementById("firstButton");
const resultOne = document.getElementById("resultOne");
const resultTwo = document.getElementById("resultTwo");

firstButton.addEventListener("click", function () {
    generateRandomNumber(resultOne, "number");
});

const secondButton = document.getElementById("secondButton");

secondButton.addEventListener("click", function () {
    generateRandomNumber(resultTwo, "secondNumber");
});

function generateRandomNumber(resultElement, inputId) {
    let selectedNumber = document.getElementById(inputId);
    let number = parseInt(selectedNumber.value);

    if (!isNaN(number)) {
        let randomNumber = Math.floor(Math.random() * number) + 1;
        displayResult(resultElement, randomNumber);
        console.log("Numero casuale generato:", randomNumber);
    } else {
        console.log("Inserisci un numero valido.");
    }
}

function displayResult(resultElement, randomNumber) {
    let newResultDiv = document.createElement("div");
    newResultDiv.className = "result-item";
    newResultDiv.innerHTML = randomNumber;

    // Imposta il font size fisso per il nuovo risultato
    newResultDiv.style.fontSize = "5rem";

    // Aggiungi il nuovo risultato sopra gli esistenti
    resultElement.insertBefore(newResultDiv, resultElement.firstChild);

    // Riduci progressivamente il font size degli elementi esistenti
    let existingResults = resultElement.getElementsByClassName("result-item");
    for (let i = 0; i < existingResults.length; i++) {
        let fontSize = 3.5 - i * 0.5;
        existingResults[i].style.fontSize = fontSize + "rem";
    }

    // Rimuovi l'elemento più vecchio se ce ne sono troppi
    if (existingResults.length > 6) {
        resultElement.removeChild(existingResults[6]);
    }
}
