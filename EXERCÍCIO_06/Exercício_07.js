import rl from 'readline-sync';


let celsius = rl.questionFloat('Digite a temperatura em celsius para conversão: ')

//Declaração de função

function Conversão(celsius) {
    return `A temperatura em fahrenheit é ${((9/5 * celsius) + 32)}`
}

console.log(Conversão(celsius))


//Expressão de função

let converterCelsius = function (celsius) {
    return `A temperatura em fahrenheit é ${((9/5 * celsius) + 32)}`
}

console.log(converterCelsius(celsius));


//Arrow 

let Converter = (celsius) => `A temperatura em fahrenheit é ${((9/5 * celsius) + 32)}`

console.log(Converter(celsius))