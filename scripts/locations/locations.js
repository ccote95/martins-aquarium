import { getLocation } from "../database.js";

const allLocations = getLocation()

export const locationList = () => {
    let locationHTML = "<ul>"

    for (const location of allLocations) {
        locationHTML += `
        <div class="location">
        ${location.location}</div>`
        
    }
    locationHTML += "</ul>"
    return locationHTML
}

export const quoteList = () => {
    let quoteHTML = "<ul>"
    for (const quote of allLocations) {
        quoteHTML += `
        <div class="quoteCard">
        ${quote.quote}</div>`
        
    }
    quoteHTML += "</ul>"
    return quoteHTML
}