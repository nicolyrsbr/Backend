import rl from 'readline-sync';

let frase = rl.question('Informe um texto para ser convertido: ');

//Declaração de função
function Maisculas(texto) {
    return texto.toUpperCase();
}

console.log(Maisculas(frase));


//Expressão de função
const caixaAlta = function(texto) {
    return texto.toUpperCase();
}

console.log(caixaAlta(frase));

//Arrow function
const tudoMaiusculas = (texto) => texto.toUpperCase();

console.log(tudoMaiusculas(frase));


