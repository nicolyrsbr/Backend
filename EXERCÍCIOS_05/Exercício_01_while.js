import rl from 'readline-sync';

let numero = rl.questionInt('Informe o número para gerar a tabuada: ');

let cont = 1;

console.log(`\n---Tabuada do número ${numero}---\n`)
while(cont <= 10) {
    console.log(`${numero} x ${cont} = ${numero*cont}`);
    cont++;
}