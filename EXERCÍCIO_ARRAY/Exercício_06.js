let numeros = [10, 5, 8, 2, 7];
console.log(`Números: `+ numeros.join(" - "));

let soma = numeros.reduce((total, numero) => total + numero, 0);
console.log(`A soma é: ${soma}`);

let multiplicacao = numeros.reduce((total, numero) => total * numero, 1);
console.log(`A multiplicação é: ${multiplicacao}`);