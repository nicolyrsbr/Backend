let carrinho = [];

function adicionarItem(item) {
    carrinho.push(item);
  }

function removerItem(item) {
    let index = carrinho.indexOf(item);
    if (index !== -1) {
        carrinho.splice(index, 1);
      }    
}

function listarItens() {
    console.log("Itens no carrinho:", carrinho);
  }

adicionarItem("maçã");
adicionarItem("pão");
listarItem();

removerItem("pão");
listarItem();

removerItem("leite");