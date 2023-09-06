export default function CreateHouseholdMember({ household, setHousehold}){
    const createNewMember = event =>{
        event.preventDefault();
        const newMemberName = event.target.householdMember.value
        const newKey = household.length +1
        setHousehold([...household, {key: newKey, memberName: newMemberName, spendingLog: []}])
    }
    return(
        <div>
            <form onSubmit={createNewMember}>
                <a>Who is in your household?</a>
                <input type="text" id="householdMember"/>
                <button type="submit">Add member to household</button>
            </form>
        </div>
    )
}
