import { fishList } from "./fish/fish.js";
import { tankTips } from "./tips/tips.js";
import { locationList } from "./locations/locations.js";
import { quoteList } from "./locations/locations.js";


const fishListHTML = fishList()
const tipsListHTML = tankTips()
const locationListHTML = locationList()
const quotesHTML = quoteList()


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


const wholeLocationList = `
<h1 class="locationTitle">Places I've Been</h1>
${locationListHTML}`

const existingLocationCard = document.querySelector(".locationCard")
existingLocationCard.innerHTML = wholeLocationList


const wholeQuote = `
<h1 class="martinQuotes">Martin's Quotes</h1>
${quotesHTML}`

const existingQuoteCard = document.querySelector(".quote__card")
existingQuoteCard.innerHTML = wholeQuote