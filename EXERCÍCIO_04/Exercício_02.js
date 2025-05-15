import entradaDados from 'readline-sync';

let mes = entradaDados.question('Informe o dia da semana(1-7): ');

switch (mes) {
    case 1:
        console.log('Domingo');
        break;
    case 2:
        console.log('Segunda');
        break;
    case 3:
        console.log('Terça');
        break;
    case 4:
        console.log('Quarta');
        break;
    case 5:
        console.log('Quinta');
        break;
    case 6:
        console.log('Sexta');
        break;
    case 7:
        console.log('Sabado');
        break;
    case 8:
        console.log('Segunda');
        break;
    case 9:
        console.log('Terça');
        break;
    case 10:
        console.log('Quarta');
        break;
    case 11:
        console.log('Quinta');
        break;
    case 12:
        console.log('Sexta');
        break;
    default:
        console.log('Mês inválido')
}