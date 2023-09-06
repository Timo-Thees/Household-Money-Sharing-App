import { useState } from "react"
import CreateHousehold from "./createHousehold"
import CreateHouseholdMember from "./createHouseholdMember"


export default function HouseholdOverview(){
const [household, setHousehold] = useState([])
    return(
        <div>
            {(household.length === 0 ? 
            <CreateHousehold setHousehold={setHousehold}/> : 
            <div>
                <a>Spendings for {household[0].householdName}</a>
            <CreateHouseholdMember household={household} setHousehold={setHousehold}/>
            </div>
            )}
            <button onClick={()=>console.log(household)}>Show household</button>
        </div>
    )
}