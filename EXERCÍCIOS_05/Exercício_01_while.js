import rl from 'readline-sync';

let numero = rl.questionInt('Informe um número para tabuada: ');

let cont = 1;

while(cont <= 10) {
    console.log(`${numero} * ${cont} = ${numero*cont}`)
    cont++
}