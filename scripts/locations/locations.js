import { getLocation } from "../database.js";

const allLocations = getLocation()

export const locationList = () => {
    let locationHTML = "<ul>"

    for (const location of allLocations) {
        locationHTML += `
        <div class="locationContainer">
        <div class="location">
        ${location.location}</div>
        <div class="locationImg_Container">
        <img class="locationImg"src="${location.image}"></div>
        </div>`
        
    }
    locationHTML += "</ul>"
    return locationHTML
}

export const quoteList = () => {
    let quoteHTML = ` <div class="quoteList">`
     
    for (const quote of allLocations) {
        quoteHTML += `
        <div class="quotes">
        ${quote.quote}</div>`
        
    }
    
    quoteHTML += `</div>`
    return quoteHTML
}