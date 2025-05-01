let frutas = ["banana", "maçã", "pera", "uva", "melão"];

let frutasComA = frutas.filter(frutas => frutas.includes("a"));
console.log("Frutas com a letra 'a': ", frutasComA);

let msg = frutas.includes("abacate") ? "Já tem abacate": frutas.push("abacate")

console.log(`Frutas atualizadas: `, frutas)