import { useState } from "react"
import CreateHousehold from "./createHousehold"

export default function UserOverview({loginId, allHouseholds, setAllHouseholds}){
    const [createHousehold, setCreateHousehold] = useState(false)

    return(
        <div>
            {createHousehold === true ? <CreateHousehold setCreateHousehold={setCreateHousehold} allHouseholds={allHouseholds} setAllHouseholds={setAllHouseholds} loginId={loginId}/> : <></>}
            <h1>Hello, {loginId.name}!</h1>

            <button onClick={()=>setCreateHousehold(true)}>Create Household</button>            
        </div>
    )
}