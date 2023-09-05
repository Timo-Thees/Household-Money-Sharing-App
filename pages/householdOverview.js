import { useState } from "react"


export function HouseholdOverview(){
    const [partnerOne, setPartnerOne] = useState({name: Timo, amoundPayed: 0.00})
    const [partnerTwo, setPartnerTwo] = useState({name: Sandra, amoundPayed: 0.00})


    return(
        <div>
            <p>You paid this much: {partnerOne.amoundPayed}€</p>

            <p>{partnerTwo} paid this much: {partnerTwo.amoundPayed}€</p>
            <p>Now {hasToPay} has to pay {difference}€ to {getsMoney} </p>

        </div>
    )
}