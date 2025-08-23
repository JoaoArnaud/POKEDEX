const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 10;
let offset = 0;

function loadPokemonItems(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map((pokemon) => {
            return `
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number.toString().padStart(3, '0')}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                    <ol class="types">
                    ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join("")}
                    <a href="pokemon-detail.html?id=${pokemon.name}" id="detail${pokemon.name}"><button>...</button></a>
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
    `}).join("");
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener("click", () => {
    offset+=limit
    loadPokemonItems(offset, limit)
})