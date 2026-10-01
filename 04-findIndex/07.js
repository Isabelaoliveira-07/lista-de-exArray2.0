/**
 * ===================================================================
 * 📌 MÉTODO: findIndex()
 * ===================================================================
 * Função: Retorna a POSIÇÃO (ÍNDICE 0, 1, 2...) do primeiro item que atende
 * à condição. Se não encontrar, retorna -1.
 * ===================================================================
 */
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];


const encontrarIndiceMonitor = produtos.findIndex(produto => produto.nome === "Monitor");
console.log("Índice do produto 'Monitor':", encontrarIndiceMonitor); // 2