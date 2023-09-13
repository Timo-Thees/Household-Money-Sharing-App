import { useState } from "react"
import CreateHousehold from "./createHousehold"
import AddExpenses from "./addExpanses"

export default function UserOverview({loginId, allHouseholds, setAllHouseholds}){
    const [createHousehold, setCreateHousehold] = useState(false)
//    const thisUsersHouseholds = allHouseholds.filter((users) => users.members.filter((members)=> members.memberEmail === loginId.email))
/* zeile 7 hat funktioniert bis ich mit AddExpanses versucht habe eine ausgabe hinzuzufügen. Habe alles rauskommentiert damit das projekt erstmal ohne error startet. So wie
die zeile bis jetzt geschrieben ist aber würde sie auch einen error produzieren sobald allHousheholds leer ist, also....idk, muss irgendwie neu. 
ich sehe auch nicht wie AddExpanses (<--falsch geschrieben by the way) 'users' nicht mehr viable macht.
*/

    const showStuff = ()=>{
        console.log(allHouseholds)
        console.log(loginId)
        console.log(thisUsersHouseholds)
    }
// löschen wenn nicht mehr gebrauch!
    return(
        <div>
            {createHousehold === true ? <CreateHousehold setCreateHousehold={setCreateHousehold} allHouseholds={allHouseholds} setAllHouseholds={setAllHouseholds} loginId={loginId}/> : <></>}
            <h1>Hello, {loginId.name}!</h1>
            {/*thisUsersHouseholds.map(households =>{
                return(
                    <div key={households.key}>
                        <h2>{households.householdName}</h2>
                        {households.members.map(members =>{
                            return(
                                <div key={members.memberEmail}>
                                    <a>{members.memberName}</a>
                                    <a>{members.expenses}</a>
                                    {members.memberEmail === loginId.email ? <AddExpenses loginId={loginId} householdKey={households.key} allHouseholds={allHouseholds} setAllHouseholds={setAllHouseholds}/> : <></> }
                                </div>
                            )
                        })}
                    </div>
                )
            })*/}
            <button onClick={()=>setCreateHousehold(true)}>Create Household</button>
            <button onClick={showStuff}>Show Stuff</button>
        </div>
    )
}