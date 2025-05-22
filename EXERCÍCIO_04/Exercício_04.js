import entradaDados from 'readline-sync';

let salario = entradaDados.questionFloat('Informe o valor do seu salário atual: ');
let cat = entradaDados.question('Informe a sua categoria de bonificação: ').toUpperCase();
let bonus = 0;

switch (cat) {
    case 'A':
        bonus = salario * 0.05
        console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'B':
        bonus = salario * 0.10
        console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'C':
        bonus = salario * 0.15
        console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break
    case 'D':
        bonus = salario * 0.20
        console.log(`Novo salário: ${(salario + bonus).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
        break

    default:
        console.log('Categoria inválida!')
}
