import { useState } from "react"

export default function EmailTaken({setEmailTaken}){
    const [forgotPassword, setForgotPassword] = useState(false)
    return(
        <div>        
        {forgotPassword === false ? 
            <div>
                <a>This mail is already taken. Try another mail. Or did you forget your password?</a>
                <button onClick={()=>setEmailTaken(false)}>Ok</button>
                <button onClick={()=>setForgotPassword(true)}>I Forgor Passwor</button>
            </div> :
            <div>
                <h1>WELL THATS TO BAD</h1>
                <a>(i did not build a password retrival function yet. just make up a new email i wont tell the cops)</a>
                <button onClick={()=>setForgotPassword(false)}>ok</button>
             </div>
        }
        </div>
    )
}