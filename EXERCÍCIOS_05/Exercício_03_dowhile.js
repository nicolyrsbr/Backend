import rl from 'readline-sync';

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let palpite;

do {
    palpite = parseInt(rl.question('Adivinhe um número entre 1 e 100: '));

    if (palpite < numeroSecreto) {
        console.log(`O número é MAIOR!`);
    } else if (palpite > numeroSecreto) {
        console.log(`O número é MENOR!`);
    } else {
        console.log(`Parabéns! Você acertou!`);
    }
} while (palpite !== numeroSecreto);
