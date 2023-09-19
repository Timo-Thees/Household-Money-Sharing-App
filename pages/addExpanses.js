export default function AddExpenses({loginId, householdKey, allHouseholds, setAllHouseholds}){
    const addExpenses = event=>{
        event.preventDefault();
        const expenses = event.target.expenses.value
        const reason = event.target.reason.value

        const lookForThisHousehold = (household)=> household.key === householdKey
        const indexOfThisHousehold = allHouseholds.findIndex(lookForThisHousehold)
        const lookForThisMember = (members)=> members.memberEmail === loginId.email
        const indexOfThisMember = allHouseholds[indexOfThisHousehold].members.findIndex(lookForThisMember)
        const previousExpenses = allHouseholds[indexOfThisHousehold].members[indexOfThisMember].expenses
        const newKey = previousExpenses.lenght
        const newExpenses = [...previousExpenses, {key: newKey, expense: expenses, reason: reason}]
/*        setAllHouseholds([...allHouseholds, allHouseholds[indexOfThisHousehold].members[indexOfThisMember].expenses[newExpenses]])
        console.log(allHouseholds[indexOfThisHousehold].members[indexOfThisMember])*/
        /*
        zeile 13 hat dazu geführt das zeile 7 bei userOvierview (<--- noch ein schreibfehler >:( ) einen fehler wirft 
        */
    }
    return(
        <form onSubmit={addExpenses}>
            <a>expenses</a>
            <input type="number" id="expenses"/>
            <a>for what?</a>
            <input type="text" id="reason"/>
            <button type="submit" >Add expenses</button>
        </form>
    )
}