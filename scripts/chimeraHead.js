import { getHeads } from "./database.js";

const heads = getHeads()

export const chimeraHeads = () => {
        let html = `<select id ="head">
        <option value="head">Prompt to select resource...</option>`
    
        // for loop option for each color
        for (let head of heads) {
            html += 
                `<option value=${head.id}>${head.name}</option>`
        
            }
            html+= `</select>`
        return html
    
    }
