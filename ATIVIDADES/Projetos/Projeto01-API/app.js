document.addEventListener('DOMContentLoaded', ()=>{
    const url = 'https://api.chucknorris.io/jokes/categories'
   
    fetch(url)
    .then((response)=>{
       if(!response.ok){
        throw new Error('Erro ao receber dados')
       }
       return response.json()
    })
    
    .then((data)=>{
        gerarCategorias(data)
    })
    
    .catch((err)=>console.log(err))

});

function gerarCategorias(categorias){
  const select = document.querySelector('#select');
  categorias.map((categoria)=>{
    const option = document.createElement('option');
    option.innerHTML = `${categoria}`
    option.value = categoria
    select.appendChild(option)
  });
}

const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    const select = document.getElementById('select').value;
    const url = `https://api.chucknorris.io/jokes/random?category=${select}`
    
    fetch(url)
    .then((response)=>{
       if(!response.ok){
        throw new Error('Erro ao receber dados')
       }
       return response.json()
    })
    
    .then((data)=>{
      criarPiada(data)
    })
    
    .catch((err)=>console.log(err))
});

function criarPiada(piada){
  const joke = document.getElementById('joke');
  joke.innerHTML = piada.value

  console.log(piada.value)
}