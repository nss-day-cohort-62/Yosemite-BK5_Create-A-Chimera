import { chimeraArms } from "./chimeraArms.js"
import { chimeraHeads } from "./chimeraHead.js"
import { chimeraLegs } from "./chimeraLegs.js"
import { chimeraTorso } from "./chimeraTorso.js"
import { chimeraPower } from "./chimeraPowers.js"
document.addEventListener(
    'click',
    (event) => {
        if (event.target.id === 'createOrder') {
            addCustomOrder()
        }
    }
)

export const FinalChimera = () => {
    return `
        <h1>Build a Chimera</h1>
            
        
        <article class="choices">

            <section class="chimera_head">
                <h2>Chimera Head</h2>
                ${chimeraHeads()}
            </section>

            <section class="chimera_arms">
                <h2>Chimera Arms</h2>
                ${chimeraArms()}
            </section>
            
            <section class="chimera_legs">
                <h2>Chimera Legs</h2>
                ${chimeraLegs()}
            </section>
            
            <section class="chimera_torso">
                <h2>Chimera Torso</h2>
                ${chimeraTorso()}
            </section>
            
            <section class="chimera_power">
                <h2>Chimera Power</h2>
               ${chimeraPower()}
            </section>

            <button id="createOrder">Create Chimera</button>
        </article>   
        
        <article class="customOrders">
        <h2>Chimera Order</h2>
        
        </article>`
}