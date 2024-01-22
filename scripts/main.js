import { fishList } from "./fish.js";


const fishListHTML = fishList()



const wholeList = `
<h1>Fish i own</h1>
${fishListHTML}`






const existingFishCard = document.querySelector(".ownFish__card")

existingFishCard.innerHTML = wholeList