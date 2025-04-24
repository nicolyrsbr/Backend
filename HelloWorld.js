//* primeiro Olá Mundo!
console.log("Hello, World!");


//*Como funciona função 
function Carro(marca, modelo){
    this.marca = marca,
    this.modelo = modelo
};

let meuCarro = new Carro('Fiat', 'Pulse')
meuCarro.marca //'Fiat'
meuCarro.modelo //'Pulse'


//Passagem valor e objetos
let valor = 10;
let outrovalor = valor; //passagem como valor -> passa uma cópia do valor
console.log("Valor: " + valor);
console.log("Outro valor: " + outrovalor);
outrovalor = 15;
console.log("Valor: " + valor);
console.log("Outro valor: " + outrovalor);

//

let carro = {
    cor : "azul"
}

let bicicleta = carro //Passagem como referência -> passa o endereço do objeto na memória

console.log("Carro: " + carro.cor);
console.log("Bicicleta: " + bicicleta.cor);

bicicleta.cor = "Verde";

console.log("Carro: " + carro.cor);
console.log("Bicicleta: " + bicicleta.cor);

