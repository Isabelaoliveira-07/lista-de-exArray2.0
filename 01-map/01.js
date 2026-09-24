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
