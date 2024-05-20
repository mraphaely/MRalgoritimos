//const array = [21, 6, 84, 24, 86, 11, 39];

// array.forEach((elemento, index, array)=>{})//function

// array.forEach((elemento, index, array)=>{
//    console.log(`${index}. ${elemento}. ${array}`)

// })//function
// const listaForEach = (elemento =>console.log(elemento))

// array.forEach(listaForEach)

//método MAP
// array.map((elemento)=>{
//     console.log(elemento * 2)
// })

//Método FIND
const array = [21, 6, 84, 24, 86, 11, 39];
const maiorQue31 = array.filter((elemento)=>{
    if(elemento > 30){
        return elemento
    }
})
console.log(maiorQue31)
