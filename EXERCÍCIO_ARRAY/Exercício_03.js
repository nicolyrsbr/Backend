let notas = [8,5,9,10];
let soma = notas.reduce((total, nota) => total + nota, 0);

let media = soma / notas.length;

console.log("Média: " ,media.toFixed(2));

let msg = media > 6 ? "A média é maior ou igual a 6" : "A média é menor que 6";

console.log(msg)