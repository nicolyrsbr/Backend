let pessoa = {nome: "Ana", idade: 20};
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}