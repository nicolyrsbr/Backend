import rl from 'readline-sync';

for (let i = 1; i < 10; i++) {
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário bruto de ${nome}: R$ `);
    let imposto = 0;

    if (salario <= 2100) {
        imposto = 0;
    } else if (salario <= 2800) {
        imposto = salario * 0.075;
    } else if (salario <= 3750) {
        imposto = salario * 0.15;
    } else if (salario <= 4660) {
        imposto = salario * 0.225;
    } else {
        imposto = salario * 0.275;
    }

    console.log(`\n---Imposto de renda a ser pago---`)
    console.log(`\nNome: ${nome}`);
    console.log(`Imposto a pagar: R$ ${imposto.toFixed(2)}\n`);
}
