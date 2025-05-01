let carrinho = [];

function adicionarItem(item){
    carrinho.push(item)
    console.log(`${item} foi adicionado ao carinho!`)
}

function removerItem(item) {
    let index = carrinho.indexOf(item);
    msg = index !== -1 ? carrinho.splice(index, 1) +` foi removido do carrinho.` : `${item} não está no carinho.`
    console.log(msg)
}

function listarItem() {
    msg = carrinho.length === 0 ? `Carrinho está vazio` : `Itens no carrinho: ${carrinho.join(", ")}`
    console.log(msg)
}

adicionarItem("maçã");
adicionarItem("pão");
listarItem();

removerItem("pão");
listarItem();

removerItem("leite");