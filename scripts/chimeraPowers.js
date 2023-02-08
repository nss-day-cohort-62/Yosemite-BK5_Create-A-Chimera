import { getPowers } from "./database.js";

const powers = getPowers()

export const chimeraPower = () => {
    let html = `<select id ="power">
    <option value="power">Prompt to select resource...</option>`

    // for loop option for each color
    for (let power of powers) {
        html += 
            `<option value=${power.id}>${power.size}</option>`
    
        }
        html+= `</select>`
    return html

}
