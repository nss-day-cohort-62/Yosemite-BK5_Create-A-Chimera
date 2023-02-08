import { getArms } from "./database.js"

const arms = getArms()

export const chimeraArms = () => {
    let html = `<select id ="arms">
    <option value="arms">Prompt to select resource...</option>`

    // for loop option for each color
    for (let arm of arms) {
        html += 
            `<option value=${arm.id}>${arm.name}</option>`
    
        }
        html+= `</select>`
    return html

}
