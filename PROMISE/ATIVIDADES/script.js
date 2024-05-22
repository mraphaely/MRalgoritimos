//console.log('Este é o primeiro console')

// setTimeout(() => {
//     console.log('Este é o segundo console')
// }, 3000);

// setInterval(()=>{
//     console.log('Este é o segundo console')
// }, 3000)

// console.log('Este é o terceiro console')

//------------------------------------------------------------------

// const promessa = Promise.resolve(5+5)
//     console.log('Código criado')

//     promessa.then((value)=>{
//     console.log(value)
//     return 45
// })
// .then((value)=>{
//     console.log(value-1)
// })

//-----------------------------------------------------------------

// Promise.resolve('olá' * 5)
// .then((value)=>{
//     if(Number.isNaN(value)){
//        throw new Error('Valores Inválidos')
//     }
// })
// .catch((err)=>{
//      console.log(err.message)
// })

// -------------------------------------------------------------------

// function checkNumber(n){
//     return new Promise((resolve, reject)=>{
//         if(n > 20){
//             resolve('Número maior que 20')
//         }else{
//             reject(new Errors("Número"))
//         }
//     });
// }
// const num1 = checkNumber(21)
// const num2 = checkNumber(10)

// num1.then((value)=>{
//     console.log(value)
// })
// .catch((err)=>{
//     console.log(err)
// })
// num2.then((value)=>{
//     console.log(value)
// })
// .catch((err)=>{
//     console.log(err)
// })

// -------------------------------------------------------------------

// async await

// async function somaComDelay(x,y){
//     return x + y
// }
// somaComDelay(3,5)
// .then((value)=>{
//     console.value(value)
// }).catch((err)=>{
//     console.log(err)
// })
// console.log('Código estático')

// -------------------------------------------------------------------

function respostaComDelay(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Retorno da Promise")
        },4000)
    })
}
async function chamadaAsync(){
    console.log('Chamando a promise, e esperando result')
    const resultado = await respostaComDelay()
    console.log(`Ò resultado chegou: ${resultado}`)
}
chamadaAsync()