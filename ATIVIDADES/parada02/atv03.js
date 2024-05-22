//Dados um array de objetos que representam produtos e um array que representa as quantidades compradas de cada produto:
//Crie uma função que calcule o preço total da compra, considerando as quantidades compradas de cada produto.
let produtos = [{ nome: 'Camiseta', preco: 20 }, { nome: 'Celular', preco: 500 }];
let quantidades = [3, 1];
console.log(produtos[0].preco)
console.log(quantidades[0])
function precoTotal(arrayProduto, quantidades){
  return arrayProduto.map((produto, index)=>{
     let precoVenda = produto.preco * quantidades[index]
     return{
        nome: produto.nome,
        preco: produto.preco,
        valorTotal: precoVenda,
     };
  });
}