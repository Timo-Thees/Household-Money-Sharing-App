export default function CreateHousehold({setHousehold}){
    const onCreateHousehold = event => {
        event.preventDefault();
        const householdName = event.target.householdName.value
        setHousehold([{key: 0, householdName: householdName}])
    }
    return(
        <div>
            <form onSubmit={onCreateHousehold}>
                <a>What is your household called?</a>
                <input type="text" id="householdName"/>
                <button type="submit">OK</button>
            </form>
        </div>
    )
}