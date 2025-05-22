import entradaDados from 'readline-sync';

//let dia = Number(entradaDados.question('Informe o dia da semana(1-7): '));
let dia = entradaDados.questionInt('Informe o dia da semana(1-17): ')

switch (dia) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda-feira');
        break;
    case 3:
        console.log('Terça-feira');
        break;
    case 4:
        console.log('Quarta-feira');
        break;
    case 5:
        console.log('Quinta-feira');
        break;
    case 6:
        console.log('Sexta-feira');
        break;
    case 7:
        console.log('Sábado');
        break;

    default:
        console.log('Valor inválido!\nInforme o valor no intervalo de 1 a 7.');
        break;
}
