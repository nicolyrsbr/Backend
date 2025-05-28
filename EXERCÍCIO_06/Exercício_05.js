import rl from 'readline-sync';

let valorP = rl.questionFloat('Informe o valor do produto: ');
let porc = rl.questionFloat('Informe a porcentagem do desconto: ');


//Declaração de função

function novoValor(valorP, porc) {
    return `O valor do produto com desconto é R$ ${(valorP - (valorP * porc/100)).toFixed(2)}`
}

console.log(novoValor(valorP, porc));

//Expressão de função

let valorNovo = function (valorP, porc) {
    return `O valor do produto com desconto é R$ ${(valorP - (valorP * porc/100)).toFixed(2)}`
}

console.log(valorNovo(valorP, porc));

//Arrow

let desconto = (valorP, porc) => `O valor do produto com desconto é R$ ${(valorP - (valorP * porc/100)).toFixed(2)}`

console.log(desconto(valorP, porc))