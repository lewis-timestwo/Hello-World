let pokeForm = document.getElementById("form")
let pokemonGrid = document.querySelector("#pokemon-result")
let searchButton = document.getElementById("search-btn")
let resultsHeader = document.querySelector(".results-header")

// Event Listeners 

pokeForm.addEventListener("submit", (event) =>{
      event.preventDefault()
      result = document.querySelector('input').value
      page = 1;
      //searchPokemon(result)
      resultsHeader.textContent = "Result for: " + result
})