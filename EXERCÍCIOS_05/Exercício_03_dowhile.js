import rl from 'readline-sync';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
    palpite = rl.questionInt('Adivinhe um número entre 1 e 100: ');

    if (palpite === numeroSecreto) {
        console.log(`Parabéns! Você acertou!`);
    } else if (palpite < numeroSecreto) {
        console.log(`O número é MAIOR!`);
    } else{
        console.log(`O número é MENOR!`);
    } 
} while (palpite !== numeroSecreto);
