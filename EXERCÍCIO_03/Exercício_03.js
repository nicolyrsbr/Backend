class Imovel {
    constructor(quartos, tipo, endereco){
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco
    }
    exibirInformacoes(){
        return `${this.tipo} com ${this.quartos} quartos, localizado(a) na ${this.endereco}`;
    }
}

let casa = new Imovel(4, 'Casa', 'Rua da Amizade, 789 - Bairro Alegre');

let apartamento = new Imovel(2, 'Apartamento', 'Avenida da Paz, 123 - Centro')

console.log(casa.exibirInformacoes());
console.log(apartamento.exibirInformacoes());