import entradaDados from 'readline-sync';

let x = entradaDados.questionFloat('Informe o 1° valor: ');
let y = entradaDados.questionFloat('Informe o 2° valor: ');
let op = entradaDados.questionInt('Informe o tipo da operação: \n[1] soma \n[2] Subtração \n[3] Multiplicação \n[4] Divisão\nTipo: ');

switch (op) {
    case 1: 
        console.log(`${x} + ${y} = ${x + y}`);
        break;
    case 2:
        console.log(`${x} - ${y} = ${x - y}`);
        break;
    case 3:
        console.log(`${x} * ${y} = ${x * y}`);
        break;
    case 4:
        console.log(`${x} / ${y} = ${x / y}`);
        break;

    default:
        console.log(`Opção Inválida!`);
        break
}

