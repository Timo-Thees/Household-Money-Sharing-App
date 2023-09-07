export default function UsernameNotFound({setUsernameNotFound}){
    return(
        <div>
            <a>Username not found</a>
            <button onClick={()=> setUsernameNotFound(false)}>OK</button>
        </div>
    )
}