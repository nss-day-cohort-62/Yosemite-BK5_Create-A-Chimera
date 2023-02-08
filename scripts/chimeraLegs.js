import { getLegs } from "./database.js";

const legs = getLegs()

export const chimeraLegs = () => {
    let html = `<select id ="legs">
    <option value="legs">Prompt to select resource...</option>`

    // for loop option for each color
    for (let leg of legs) {
        html += 
            `<option value=${leg.id}>${leg.name}</option>`
    
        }
        html+= `</select>`
    return html

}
