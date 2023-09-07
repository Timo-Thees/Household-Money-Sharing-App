export default function PasswordFalse({setPasswordFalse}){
    return(
        <div>
        <a>password false</a>
        <button onClick={()=> setPasswordFalse(false)}>OK</button>
        </div>
    )
}