// "characters": "https://rickandmortyapi.com/api/character",
// "locations": "https://rickandmortyapi.com/api/location",
// "episodes": "https://rickandmortyapi.com/api/episode"

const urlBase = 'https://rickandmortyapi.com/api';
const page = 1

const loadCharacters = async () => {
    const res = await fetch(`${urlBase}/character?page=${page}`);
    const data = await res.json() 
    const limitData = data.results.slice(0,6)
    return {results: limitData}
}; 

const loadLocations = async () => {
    const res = await fetch(`${urlBase}/location`)
    return await res.json()
}; 

const loadEpisodes = async () => {
    const res = await fetch(`${urlBase}/episode`)
    return await res.json()
};
// console.log(loadCharacters())
// console.log(loadLocations())
// console.log(loadEpisodes())
const loadAllWitchPromiseAll = async ()=>{
    const [character, location, episode] = await Promise.all([
       loadCharacters(),
       loadLocations(),
       loadEpisodes(),
    ]);
     console.log('Character:',character.results)
     showCharacter(character.results)
     console.log('Location:',location.results)
     console.log('Episode:',episode.results)
};
loadAllWitchPromiseAll()

function showCharacter(character){
  const characterContainer = document.getElementById('character-container');
  character.map((character)=>{
        const divCharacter = document.createElement('div')
        divCharacter.id=`character-${character.id}`;
        divCharacter.innerHTML =`
        <img id="img-character" src=" ${character.image}" alt="imagem do personagem">

          <article class="character-info">
            <h3>${character.name}</h3>
             <span class="${character.status}">${character.status} - ${character.species}</span>

             <span class="location">Location:</span>
             <a href="${character.location.url}">${character.location.name}</a>

             <span class="Origin">Origin:</span>
             <a href="${character.origin.url}">${character.origin.name}</a>
         </article>
        `;
        divCharacter.classList.add("character-box");
        characterContainer.appendChild(divCharacter);

        divCharacter.addEventListener("click", ()=>{
          characterDetails(character.id)
        })
      });   
}

function characterDetails(id){
  console.log(id)
  const idEncrypted = encryptId(id)
  console.log(idEncrypted)
  window.location.href = `./pages/character.html?id=${idEncrypted}`
}

function encryptId(id){
  return id.toString(36)
}