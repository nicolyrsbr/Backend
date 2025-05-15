import entradaDados from 'readline-sync';

let valor1 = entradaDados.question('Informe o 1° valor: ');
let valor2 = entradaDados.question('Informe o 2° valor: ');
let operacao = entradaDados.question('Informe o tipo da operação(+, -, *, /): ');

switch (operacao) {
    case operacao = '+': 
        console.log(`A soma é: ${valor1 + valor2}`);
        break;
    case operacao = '-':
        console.log(`A subtração é: ${valor1 - valor2}`);
        break;
    case operacao = '*':
        console.log(`A multiplicação é: ${valor1 * valor2}`);
        break;
    case operacao = '/':
        console.log(`A divisão é: ${valor1 / valor2}`);
        break;
    default:
        console.log(`Não foi possivel realizar a operação`);
        break
}

