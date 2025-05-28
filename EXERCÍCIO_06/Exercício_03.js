import rl from 'readline-sync';

let a = rl.questionFloat('Digite o número a: ');
let b = rl.questionFloat('Digite o número b: ');


//Declaração de função
function soma(a,b) {
    return `${a} + ${b} = ${a+b}`
}

console.log(soma(a,b));

//Expressão de função
let somar = function(a,b) {
    return `${a} + ${b} = ${a+b}`
}

console.log(somar(a,b));

//Arrow
let somei =(a,b) =>`${a} + ${b} = ${a+b}`

console.log(somei(a,b));