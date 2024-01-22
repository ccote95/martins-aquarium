import { getFish } from './database.js'

const allFish = getFish()

export const fishList = () => {
    let fishHTML = "<ul>"

    for (const fish of allFish) {
        fishHTML += `
       <div class="fishImg"> <img class= "fishImg" src= "${fish.image}"></div>
       <div class="fishText">
        <div class="fishSpecies">Species: ${fish.species}</div>
        <div>Name: ${fish.name}</div>
        <div>Food: ${fish.food}</div>
        <div>Size: ${fish.size}</div>
        <div>Harvest Location: ${fish.harvestLocation}</div>
        </div>`
        
    }

    fishHTML += "</ul>"

    return fishHTML
}