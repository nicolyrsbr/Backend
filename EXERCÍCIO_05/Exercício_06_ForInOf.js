const pessoa = {
    nome: 'Ana',
    idade: 20,
    sexo: 'M'
    };

for (let dados in pessoa) {
    console.log(`${dados}: ${pessoa[dados]}`);
}
