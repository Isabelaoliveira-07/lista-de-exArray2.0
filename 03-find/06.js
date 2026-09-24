/**
 * ===========================================================================
 * 📌 MÉTODO: find()
 * ===========================================================================
 * Função: Percorre o array e retorna o PRIMEIRO ELEMENTO que satisfaz a condição.
 * Se nenhum for encontrado, retorna undefined.
 * ===========================================================================
 */

console.log("--- Produtos encontrados ---");

const produto = [

    { id: 3, produto: "Mouse", categoria: "Periféricos", preco: 250.0, estoque: 13, ativo: true },

    { id: 102, produto: "Celular", categoria: "Periférico", preco: 120.0, estoque: 23, ativo: false },

    { id: 103, produto: "Computador", categoria: "Periférico", preco: 1100.00, estoque: 10, ativo: true },

    { id: 104, produto: "Teclado", categoria: "Periférico", preco: 180.0, estoque: 0, ativo: false }

];

const produtoId = produto.find(produto => produto.id === 3);
console.log("Produto com id 3:", produtoId);

const produtoSemEstoque = produto.find(produto => produto.estoque === 0);
console.log("Primeiro produto sem estoque:", produtoSemEstoque);