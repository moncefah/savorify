import {setRandomRecipes} from "./randomRecipes.js";
const generateRecipeOnClick =
    document.querySelector(".button__random").addEventListener("click",(event)=>{
        event.preventDefault()
        setRandomRecipes()
    })
