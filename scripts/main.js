import { fishList } from "./fish/fish.js";
import { tankTips } from "./Tips/tips.js";


const fishListHTML = fishList()
const tipsListHTML = tankTips()



const wholeList = `
<h1 class="own">Fish I Own</h1>
${fishListHTML}`


const existingFishCard = document.querySelector(".ownFish__card")

existingFishCard.innerHTML = wholeList


const wholeTipList = `
<h1 class="tankTips">Tank Tips</h1>
${tipsListHTML}`

const existingTipCard = document.querySelector(".tips__aside")
existingTipCard.innerHTML = wholeTipList