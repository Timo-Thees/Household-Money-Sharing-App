import { useState } from "react";

export default function CreateHousehold({setCreateHousehold, allHouseholds, setAllHouseholds, loginId}){
    const createNewHousehold = event=>{
        event.preventDefault();
        const householdName = event.target.newHouseholdName.value.toString();
        const firstMemberEmail = loginId.email
        const firstMemberName = loginId.name
        const key = allHouseholds.length
        const newHousehold = {key: key, householdName: householdName, members: [{memberEmail: firstMemberEmail, memberName: firstMemberName, expenses: []}]}
        setAllHouseholds([...allHouseholds, newHousehold])
        setCreateHousehold(false)
    }
    return(
        <div>
            <form onScroll={createNewHousehold}>
                <h2>Household Name</h2>
                <input type="text" id="newHouseholdName"/>
                <button type="submit">Ok</button>
            </form>
        </div>
    )
}