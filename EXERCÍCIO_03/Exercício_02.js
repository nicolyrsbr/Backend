let produtoEmbalado = {
    nome: 'Laptop HP',
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500
}

console.log(`O produto ${produtoEmbalado.nome}, da categoria ${produtoEmbalado.categoria}, pesando ${produtoEmbalado.peso} kg, está
à venda por ${produtoEmbalado.preco.toLocaleString('pt-BR',{style:'currency',currency: 'BRL'})}.`)  