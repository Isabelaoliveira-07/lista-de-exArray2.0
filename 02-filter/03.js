/**
 * ===========================================================================
 * 📌 MÉTODO: filter()
 * ===========================================================================
 * Função: Percorre o array e SELECIONA apenas os itens que atendem a uma
 * condição (retornam true). Gera um NOVO array com tamanho menor ou igual ao original.
 * ===========================================================================
 */
console.log("--- Produtos ativos ---");

const produto = [
  { id: 101, produto: "Mouse", categoria: "Periféricos", preco: 250.0, estoque: 13, ativo: true },
  { id: 102, produto: "Celular", categoria : "Periférico", preco: 120.0, estoque: 23, ativo: false },
  { id: 103, produto: "Computador", categoria: "Periférico", preco: 1.100.00, estoque: 10, ativo: true },
  { id: 104, produto: "Teclado", categoria: "Periférico", preco:180.0, estoque: 07, ativo: false }
];

const produtoAtivos = produto.filter(produto => produto.ativo === true);

console.log("Produtos ativos no sistema:", produtoAtivos);
