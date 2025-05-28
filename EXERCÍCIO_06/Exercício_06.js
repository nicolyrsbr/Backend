import rl from 'readline-sync';

let raio = rl.questionInt('Digite o raio para ver a área do círculo: ');


//Declaração de função

function calcularArea(raio) {
    return `A área do círculo é ${(3.14 * (raio * raio)).toFixed(2)} cm²`
}

console.log(calcularArea(raio));

//Expressão de função

let Area = function (raio) {
    return `A área do círculo é ${(3.14 * (raio * raio)).toFixed(2)} cm²`
}

console.log(Area(raio));

//Arrow

let areaCalcular = (raio) => `A área do círculo é ${(3.14 * (raio * raio)).toFixed(2)} cm²`

console.log(areaCalcular(raio))
