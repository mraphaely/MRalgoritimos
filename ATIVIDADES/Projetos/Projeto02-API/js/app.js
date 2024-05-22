document.addEventListener("DOMContentLoaded", () => {
    // const api_key = 'chave disponibilizda oela api'
    // fetch(url, {headers:{
        //     'x-api-key': api_key
        // }})
        const url = `https://swapi.dev/api/people/`
    fetch(url)
    .then((response)=>{
        if(!response.ok){
            throw new Error('Erro ao receber os dados');
        }
        return response.json()
    }) 
    .then((data)=>{
        rederizarPersonagens(data);
    })
    .catch((err)=>console.log(err));
});

function rederizarPersonagens(items){
    const container = document.getElementById('personagem-container');

    items.results.forEach((item, index)=>{
        const divPersonagens = document.createElement( "div" );
        divPersonagens.innerHTML =`
    <div class = "personagem-caixa">
        <img src ="./image/perso${index}.png">
        <div>
           <h3>${item.name}</h3>
         </div>
        </div>
        `;
    divPersonagens.addEventListener('click',()=>{
        detalhesPersonagem(item, index)
    })
    divPersonagens.classList.add('personagem')    
    container.appendChild(divPersonagens);
    });
}
function detalhesPersonagem(item, index){
    window.location.href = `./pages/person.html?index=${index}`;
}