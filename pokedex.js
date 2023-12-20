let pokeApi = async () => {
  const pokedex = [];

  for (let i = 1; i <= 151; i++) {
    const final = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const pokemojason = await final.json();
    pokedex.push(pokemojason);
    // console.log(pokedex);
  }
  // const pokimosnMapeables = mapedPokimons(pokedex);
  return pokedex;
};

const mapedPokimons = (pokemonsBadMaped) => {
  console.log(pokemonsBadMaped);

  return pokemonsBadMaped.map((digimones) => ({
    name: digimones.name,
    image: digimones.sprites.front_default,
    image_back: digimones.sprites.back_default,
    type: digimones.types.map((type) => type.type.name),
    experience: digimones.base_experience,
    abilities: digimones.abilities.map((abDato) => abDato.ability.name),
    species: digimones.species.name,
    moves: digimones.moves.map((move) => move.move.name),
  }));
};

const pintar = (digimones) => {
  const pokidex$$ = document.querySelector("#pokedex");
  pokidex$$.innerHTML = "";
  for (const pokemanco of digimones) {
    const cartaPokemon$$ = document.createElement("div");
    cartaPokemon$$.classList.add("card");
    cartaPokemon$$.innerHTML = `
    <div class = 'card-front'>
      <h2 class = 'card_title'>${pokemanco.name}</h2>
      <img src = '${pokemanco.image}' alt = '${pokemanco.name}' class='card__img'>
      <div class = 'card__type'>${pokemanco.type}</div>
      
      </div>
    `;
    pokidex$$.appendChild(cartaPokemon$$);
    // console.log(pokemanco.image);
  }
};

const init = async () => {
  const pokemons = await pokeApi();
  const pokemonMapeados = await mapedPokimons(pokemons);
  pintar(pokemonMapeados);
};

init();
