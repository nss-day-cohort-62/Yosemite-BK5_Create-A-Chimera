import { getTorsos } from "./database.js";

const torsos = getTorsos()

export const chimeraTorso = () => {
    let html = `<select id ="torso">
    <option value="torso">Prompt to select resource...</option>`

    // for loop option for each color
    for (let torso of torsos) {
        html += 
            `<option value=${torso.id}>${torso.name}</option>`
    
        }
        html+= `</select>`
    return html

}
