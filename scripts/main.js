import { getHeads } from "./database.js"
import { OrderForm } from "./orders.js"
import { FinalChimera } from "./BuiltChimera.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML =  () => {
    mainContainer.innerHTML = FinalChimera()
}

renderAllHTML()

document.addEventListener('stateChanged', event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})




