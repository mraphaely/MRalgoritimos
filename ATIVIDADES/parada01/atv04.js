//Crie duas funções, uma que dobre um número e outra que triplique um 
//número. Em seguida, crie uma terceira função que utilize essas duas
// funções para calcular a soma do dobro e do triplo de um número.
const numeros = [1, 2, 3, 4, 5];


// Função dobro
const dobro = ((numeros) => {
    return numeros.map(numero => numero * 2);
})

// Função triplo
const triplo = ((numeros) => {
    return numeros.map(numero => numero * 3);
})

// Função soma tudo(dobro e triplo)
const somaTudo = ((numeros) => {
    const dobroNumeros = dobro(numeros);
    const triploNumeros = triplo(numeros);
    const soma = dobroNumeros.reduce((a, b) => a + b, 0) + triploNumeros.reduce((a, b) => a + b, 0);
    return soma;
})

const resultado = somaTudo(numeros);
console.log(numeros)
console.log(dobro(numeros))
console.log(triplo(numeros))
console.log(resultado)

    

