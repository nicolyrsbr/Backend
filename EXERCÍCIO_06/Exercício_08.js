import rl from 'readline-sync';

let altura = rl.questionFloat('Digite a sua altura: ');
let peso = rl.questionFloat('Digite o seu peso: ');

//Declaração de função
function calcularImc(altura, peso) {
    return `O seu IMC é ${(peso / (altura*altura)).toFixed(2)}`
}

console.log(calcularImc(altura, peso));


//Expressão de função
let imc = function (altura, peso) {
    return `O seu IMC é ${(peso / (altura*altura)).toFixed(2)}`
}

console.log(imc(altura, peso));


//Arrow

let calcular = (altura, peso) =>`O seu IMC é ${(peso / (altura*altura)).toFixed(2)}`

console.log(calcular(altura, peso));
