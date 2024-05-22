//Dado um array de objetos que representam produtos:
//Crie uma função que recebe um preço mínimo como parâmetro 
//e retorna um novo array contendo apenas os produtos cujo 
//preço é igual ou superior ao preço mínimo.

const produtos = [
    { nome: 'Camiseta', preco: 20 },
    { nome: 'Celular', preco: 500 },
    { nome: 'Caneca', preco: 10 }
  ];

function filtroPrecoSuperior(arrayProduto, valorMax){
        return arrayProduto.filter((produto)=> produto.preco >= valorMax)
}
const listaProduto = filtroPrecoSuperior(produtos, 20)
console.log(listaProduto)