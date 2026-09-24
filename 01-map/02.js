/**
 * 📌 MÉTODO: map()
 * =========================================================================
 * Função: Percorre o array e TRANSFORMA cada item, retornando um NOVO array
 * com o mesmo tamanho do original.
 * =========================================================================
 */


const produtos = [
    { nome: "Teclado", preco: 100,},
    { nome: "Mouse", preco: 60,},
    { nome: "Monitor", preco: 900}
];

//1. Nomes em letras maúsculas 

const nomes = produtos.map(produto => produto.nome.toUpperCase());

console.log(nomes);

// 2. Produtos com 10% de desconto
const produtosDesconto = produtos.map(produto => ({
    nome: produto.nome,
    preco: produto.preco * 0.9
}));

console.log(produtosDesconto);