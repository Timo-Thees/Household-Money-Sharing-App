export default function CreateHousehold({setCreateHousehold, allHouseholds, setAllHouseholds, loginId}){
    const createNewHousehold = event =>{
        event.preventDefault();
        const householdName = event.target.newHouseholdName.value.toString();
        const firstMemberEmail = loginId.email
        const firstMemberName = loginId.name
        const key = allHouseholds.length
        const newHousehold = {key: key, householdName: householdName, members: [{memberEmail: firstMemberEmail, memberName: firstMemberName, expenses: [{key: 0, expense: 0.00, reason: "-"}]}]}
        setAllHouseholds([...allHouseholds, newHousehold])
        setCreateHousehold(false)
        //textfeld muss noch resettet werden
    }
    return(
        <div>
            <form onSubmit={createNewHousehold}>
                <h2>Household Name</h2>
                <input type="text" id="newHouseholdName"/>
                <button type="submit">Ok</button>
            </form>
        </div>
    )
}