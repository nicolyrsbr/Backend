import rl from 'readline-sync';

let valor = rl.questionFloat('Informe um valor: ');

let porc = rl.question('Informe a porcentagem: ');


//Declaração de função

function novoValor(valor, porc) {
    return `O novo valor é R$ ${(valor + (valor * porc/100)).toFixed(2)}`
}

console.log(novoValor(valor, porc));


//Expressão de função

let valorNovo = function(valor, porc) {
    return `O novo valor é R$ ${(valor + (valor * porc/100)).toFixed(2)}`
}

console.log(valorNovo(valor, porc))

//arrow

let novo = (valor, porc) => `O novo valor é R$ ${(valor + valor * (porc/100)).toFixed(2)}`

console.log(novo(valor, porc));