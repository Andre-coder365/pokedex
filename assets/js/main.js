//Arrow function - eu tiro a palavra "funãço" de dentro dos parênteses
//tiro a palavra "return" e coloco a seta depois dos parênteses
//Se eu tiver apenas uma linha de retorno eu posso tirar as chaves

//Exemplo de function tradicional: .then (function (response) {return response.json()})

// function convertPokemonTypesToLI(pokemonTypes) {
//     return pokemonTypes.map((typeSlot) => `<li class="type">${type}</li>`)
// }
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10
let offset = 0





function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then ((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
        <li class="pokemon ${pokemon.type}">
		            <span class="number">#${pokemon.number}</span>
		            <span class="name">${pokemon.name}</span>
		
                <div class="detail">
                    <ol class="types">
                       ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                         alt="${pokemon.name}">

                </div>
		        </li>
        
        `).join((''))
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)


loadMoreButton.addEventListener('click', () => {
    offset += limit

    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {

        loadPokemonItens(offset, limit)

    }



   
})






/* pokeApi.getPokemons ().then ((pokemons = []) => {
     const listItens = []
    
     for (let i = 0; i < pokemons.length; i++) {
         const pokemon = pokemons[i];
        listItens.push(convertPokemonToLi(pokemon))
     }

     console.log(listItens)
    
    
 })
 .catch(function(error) {
     console.log(error)
 })
 .finally (function(){
     console.log("Requisição concluída!")
 })


 const x = 10 + 10
 console.log(x) */
