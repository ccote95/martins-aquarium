import { getTips } from "../database.js";

const allTips = getTips()

export const tankTips = () => {
    let tipHTML = "<ul>"

    for (const tip of allTips) {
        tipHTML += `
        <div class="tipCard">
        <div class="tip">
        <span class ="text_bold">${tip.tip}</span>
        </div>
        <div class="quote">
        ${tip.quote}</div>
        </div>`
        
    }
    tipHTML += "</ul>"

    return tipHTML
}