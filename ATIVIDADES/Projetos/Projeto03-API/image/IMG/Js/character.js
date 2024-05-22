// const urlParam = new URLSearchParams(window.character.search)
// document.write(urlParam)
// const idParam = urlParam.get('id')
// document.write('<br>', idParam)
// document.write('<br>', descryptId(idParam))

function descryptId(id){
    return parseInt(id, 36)
}

async function loadCharacter(baseUrl, id){
  try {
    const response = await fetch(`${baseUrl}/${id}`)
    if(!response){
        throw new Error('Erro ao carregar o personagem')
    }
    return response.json()
  } catch (error) {
    console.log(error)
    throw error;
  }
}

async function loadAll(){
    const urlParam = new URLSearchParams(window.location.search)
    // document.write(urlParam)
    const idParam = urlParam.get('id');

    if(!idParam){
    console.log('ID não encontrado na URL')
    return
    }

    const url=`https://rickandmortyapi.com/api/character/`
    const idDescryptId = descryptId(idParam)
    console.log(idDescryptId)

    try {
        const character = await loadCharacter(url, idDescryptId)
        console.log('Personagem: ', character)
        renderizarPersonagem(character)

    } catch (error) {
        console.log(error)
    }
}
loadAll()

async function renderizarPersonagem(character){
    // console.log(character)
    const img = document.querySelector('.img')

    const name = document.querySelector('.name')
    const status = document.querySelector('.status')
    const species = document.querySelector('.species')
    const gender = document.querySelector('.gender')
    const type = document.querySelector('.type')
    const location = document.querySelector('.location')
    const origin = document.querySelector('.origin')

    img.src = character.image

    name.innerHtml = character.name
    status.innerHtml = character.status
    species.innerHtml = character.species
    gender.innerHtml = character.gender
    type.innerHtml = character.type
    location.innerHtml = character.location
    origin.innerHtml = character.origin


}
