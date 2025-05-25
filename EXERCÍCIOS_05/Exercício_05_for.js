import rl from 'readline-sync';

let totalImposto = 0;

for (let i = 0; i < 10; i++) {
    let nome = rl.question(`Nome da ${i + 1}ª pessoa: `);
    let salario = parseFloat(rl.question(`Salário bruto: R$ `));
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

    totalImposto += imposto;

    console.log(`\nNome: ${nome}`);
    console.log(`Imposto a pagar: R$ ${imposto.toFixed(2)}\n`);
}

console.log(`Total de Imposto de Renda a ser pago pela tEquipe: R$ ${totalImposto.toFixed(2)}`);
