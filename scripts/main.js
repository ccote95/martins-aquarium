import { fishList } from "./fish/fish.js";


const fishListHTML = fishList()



const wholeList = `
<h1 class="own">Fish I Own</h1>
${fishListHTML}`


const existingFishCard = document.querySelector(".ownFish__card")

existingFishCard.innerHTML = wholeList