let notas = [8,5,9,10];
let soma = notas.reduce((total, nota) => total + nota, 0);

let media = soma / notas.length;

if (media >= 6) {
    console.log("A média é maior ou igual a 6.");
}
else {
    console.log("A média é menor que 6.");
}

console.log(msg)