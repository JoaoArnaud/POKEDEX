const urlParams = new URLSearchParams(window.location.search);
const pokemonId = urlParams.get('id');

function loadPokemonDetail(id) {
    pokeApi.getPokemonDetailById(id).then((pokemon) => {
        const detailContainer = document.getElementById('pokemonDetail');
        
        detailContainer.innerHTML = `
            <div class="pokemon-detail ${pokemon.type}">
                <div class="detail-header">
                    <span class="number">#${pokemon.number.toString().padStart(3, '0')}</span>
                    <h1 class="name">${pokemon.name}</h1>
                    <a href="index.html" class="back-button">← Voltar</a>
                </div>
                
                <div class="detail-content">
                    <div class="image-section">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                    
                    <div class="info-section">
                        <div class="types">
                            ${pokemon.types.map((type) => `<span class="type ${type}">${type}</span>`).join('')}
                        </div>
                        
                        <div class="stats">
                            <h2>Estatísticas</h2>
                            <div class="stat-item">
                                <span class="stat-name">Altura:</span>
                                <span class="stat-value">${pokemon.height / 10}m</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-name">Peso:</span>
                                <span class="stat-value">${pokemon.weight / 10}kg</span>
                            </div>
                        </div>
                        
                        <div class="abilities">
                            <h2>Habilidades</h2>
                            <div class="abilities-list">
                                ${pokemon.abilities.map((ability) => `<span class="ability">${ability}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

loadPokemonDetail(pokemonId);