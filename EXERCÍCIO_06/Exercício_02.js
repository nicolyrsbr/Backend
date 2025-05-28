import rl from 'readline-sync';

let frase = rl.questionInt('Informe um número para verificar se é par ou impar:')


//Declaração de função
function verificarNum(num) {
    if (num%2==0){
        return `É par!!`
    } else {
        return `É impar!!`
    }
}

console.log(verificarNum(frase));


//Expressão de função
const Epar = function (num) {
    if (num%2==0){
        return `É par!!`
    } else {
        return `É impar!!`
    }
}

console.log(Epar(frase));

//Arrow

const Eimpar = (num) => num % 2 === 0 ? 'É par!!' : 'É impar!!';

console.log(Eimpar(frase))