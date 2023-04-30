import recettesDB from "./recettesDB.js";

export function getRandomRecipes(array) {
    const result = [];

    while (result.length < 3) {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomValue = array[randomIndex];

        if (!result.includes(randomValue)) {
            result.push(randomValue);
        }
    }

    return result;
}
export function setRandomRecipes() {
    const cardsImages = document.querySelectorAll("  .random-recipes .card--image")
    const cardsHeader = document.querySelectorAll("  .random-recipes .card--header")
    const cardsDescription = document.querySelectorAll(".card__random-recipes--description")
    const randomRecipesArray = getRandomRecipes(recettesDB)
    cardsDescription.forEach((card,index)=> {
        const cardSpans = card.querySelectorAll("span")
        cardsHeader[index].textContent = randomRecipesArray[index].name
        cardsImages[index].src = "/assets/recettes/"+randomRecipesArray[index].id+"/1.png"
        cardSpans[0].textContent = randomRecipesArray[index].duration
        cardSpans[1].textContent = randomRecipesArray[index].country
        cardSpans[2].textContent = randomRecipesArray[index].category

    })

}