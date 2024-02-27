// Traccia 1
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
let num5 = 50;

let somma = num1 + num2 + num3 + num4 + num5;
let media = somma / 5;

console.log(`La somma tra i numeri equivale a ${somma} e la media equivale a ${media}`);

// Traccia 2
let annoCorrente = 2024;
let annoNascita = 1993;

let eta = annoCorrente - annoNascita;
let anniPerCentenario = 100 - eta;

console.log(`Hai ${eta} anni e ti mancano ${anniPerCentenario} anni per compierne 100`);

// Traccia 3
let numA = parseInt(prompt('Inserisci il primo numero:'));
let numB = parseInt(prompt('Inserisci il secondo numero:'));

let sum = numA + numB;
let sottrazione = numA - numB;
let moltiplicazione = numA * numB;
let divisione = numA / numB;
let potenza = numA ** numB;

console.log(`Con i numeri da te scelti, i risultati delle varie operazioni sono: somma (${sum}), sottrazione (${sottrazione}), moltiplicazione (${moltiplicazione}), divisione (${divisione}), potenza (${potenza})`);

// Traccia 4

let array_1 = [
    ['un', 'per', 'incatenarli.'],
    ['Anello', 'trovarli,'],
    ['ghermirli', 'e'],
    ['gondor', 'mark'],
];

let array_2 = [
    [['trovarli,']],
    ['tu,', 'sciocchi'],
    ['tu,', 'sciocchi', ['padron', 'Sauron']],
    ['nel', ['fuggite', 'gandalf']],
    [['domarli,', 'passare'], 'buio']
];

// Traccia 4
let frase = `${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[1][1]} ${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_2[4][0][0]} ${array_1[0][0]} ${array_1[1][0]} ${array_1[0][1]} ${array_1[2][0]} ${array_1[2][1]} ${array_2[3][0]} ${array_2[4][1]} ${array_1[0][2]}`;

console.log(frase);



