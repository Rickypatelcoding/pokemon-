const PokemonName = document.getElementById('input');
const img = document.getElementById('PokemonIMG');
const btn = document.getElementById('btn');
const error_1 = document.querySelector('.error')

async function FetchData() {
    try {
        let inputBOX = PokemonName.value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputBOX}`);

        if (!response.ok) {
            throw new Error('Could not fetch response');
        }

        const data = await response.json();
        if(data.sprites && data.sprites.front_default){
            const pokemonSprite = data.sprites.front_default;
            img.src = pokemonSprite;
            img.style.display = 'block';
        } 
        else {
            // console.log("Pokemon sprite not found.");
            error_1.innerHTML = 'Pokemon sprite not found.'
            img.style.display = "none";
            img.src = "";
        }

    } catch (error) {
        console.error(error);
        img.style.display = "none"; 
        img.src = ""; 
    }
}

btn.addEventListener('click', FetchData);