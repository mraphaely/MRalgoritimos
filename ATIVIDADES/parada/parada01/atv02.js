//Dado um array de palavras, crie uma função que receba esse array 
//e retorne um novo array contendo apenas as palavras que têm mais de três letras.
const palavras = ["sol", "livro", "lua", "cadeira", "mesa", "mar"]
const palavrasMaiorQue3 = palavras.filter((palavra)=>{
    return palavra.length > 3
})
console.log(palavrasMaiorQue3)  