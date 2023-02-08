export const OrderForm = () => {
    let html = '<h1 class="header" for="Chimera">Build a Chimera</h1l>\n'
    for (let head of chooseHead){
        
        
        html += `<input class="radio" type="radio" name="topic" value="${head.id}.id}"> ${head.name}</input>`
        
    }
    return html
}