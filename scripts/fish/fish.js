import { getFish } from '../database.js'

const allFish = getFish()

export const fishList = () => {
    let fishHTML = "<ul>"

    for (const fish of allFish) {
        fishHTML += `
        <div class="fishCard">
       <div class="fishImg__container"> <img class= "fishImg" src= "${fish.image}"></div>
       <div class="fishText">
        <div class="fishSpecies"><span class="text_bold">Species:</span> ${fish.species}</div>
        <div><span class="text_bold">Name:</span> ${fish.name}</div>
        <div><span class="text_bold">Food:</span> ${fish.food}</div>
        <div><span class="text_bold">Size:</span> ${fish.size}</div>
        <div><span class="text_bold">Harvest Location:</span> ${fish.harvestLocation}</div>
        </div>
        </div>`
        
    }

    fishHTML += "</ul>"

    return fishHTML
}


