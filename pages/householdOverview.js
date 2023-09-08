import { useState } from "react"
import CreateHousehold from "./createHousehold"
import CreateHouseholdMember from "./createHouseholdMember"
import useLocalStorage from "@/components/useLocalStorage"


export default function HouseholdOverview({loginStatus}){
const [household, setHousehold] = useLocalStorage("all households", [{user: ["Timo", "Sandra"], householdName: "Hoffeldstraße", members: [{key: 1, name: "Hoppe", spendings: 0}]}])
const householdsWithThisUser = household.filter((household)=> household.user = loginStatus)
    return(
        <div>
            {(household.length === 0 ? 
            <CreateHousehold setHousehold={setHousehold}/> : 
            <div>
                <a>Spendings for {household[0].householdName}</a>
            <CreateHouseholdMember household={household} setHousehold={setHousehold}/>
            </div>
            )}
            <button onClick={()=>console.log(household, loginStatus)}>Show Stuff</button>
        </div>
    )
}