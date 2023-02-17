let pokeForm = document.getElementById("form")
let pokemonGrid = document.querySelector("#pokemon-result")
let searchButton = document.getElementById("search-btn")
let resultsHeader = document.querySelector(".results-header")

// Event Listeners 

pokeForm.addEventListener("submit", (event) =>{
      event.preventDefault()
      result = document.querySelector('input').value
      page = 1;
      searchPokemon(result)
      resultsHeader.textContent = "Result for: " + result
})

async function  searchPokemon(event){
    let response = await fetch (`https://pokeapi.co/api/v2/pokemon/${event}/`)
    let responseData = await response.json()
    console.log(responseData)
    displayResults(responseData)
}

function displayResults(event){
    pokemonGrid.innerHTML += `
    <div class="pokemon-card">
    <img class="pokemon-image" alt="sprite for ${event}" src=${event.sprites.front_default}>
    </div>
    `
}