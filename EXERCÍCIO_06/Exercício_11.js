import rl from 'readline-sync';

let capital = rl.questionFloat('Informe o capital inicial investido: ');

let taxa = rl.questionFloat('Digite o porcentagem da taxa de juros: ');

let tempo = rl.questionFloat('Digite o tempo do investimento em meses: ')


//Declaração de função

function calcularMontante(capital, taxa, tempo) {
    const montante = capital * Math.pow(1 + (taxa / 100), tempo)
    return `O valor do montante é R$ ${montante.toFixed(2)}`
}

console.log(calcularMontante(capital,taxa,tempo))

//Expressão de função

let calcular = function (capital, taxa, tempo) {
    const montante = capital * Math.pow(1 + (taxa / 100), tempo)
    return `O valor do montante é R$ ${montante.toFixed(2)}`
}

console.log(calcular(capital,taxa,tempo))


//Arrow

let calcMontante = (capital, taxa, tempo) =>'O valor do montante é R$ ' + (capital * Math.pow(1 + (taxa / 100), tempo)).toFixed(2)

console.log(calcMontante(capital, taxa, tempo))
