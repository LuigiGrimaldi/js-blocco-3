// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.

// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const strPrimary = [
    'ciao',
    'mare',
    'sole',
    'montagna'
]

// stringUp = strPrimary;
// strPrimary.forEach(function(stringUp) {
//     stringUp.charAt([0]).toUpperCase()
//     console.log(stringUp);
// });

const upChar = strPrimary;
strPrimary.map(str => str.charAt(0).toUpperCase());
console.log(strPrimary); 