import { useState } from "react";
import UsernameNotFound from "./usernameNotFound";
import PasswordFalse from "./passwordFalse";
import CreateNewLogin from "./createNewLogin";

export default function Login({setLoginId, allLogins, setAllLogins}){
    const [usernameNotFound, setUsernameNotFound]= useState(false)
    const [passwordFalse, setPasswordFalse] = useState(false)
    const [createNewLogin, setCreateNewLogin] = useState(false)
    const checkPassword = event =>{
        event.preventDefault();
        const email = event.target.email.value.toString()
        const password = event.target.password.value.toString()
        const lookForEmail = (element) => element.email === email;
        const allLoginsIndex = allLogins.findIndex(lookForEmail)
        console.log(allLoginsIndex)
        if(allLoginsIndex < 0){
            return(
                setUsernameNotFound(true)
            )} 
        const comparePassword = allLogins[allLoginsIndex]
        if(password !== comparePassword.password){
            return(
                setPasswordFalse(true)
            )
        } else {
            setLoginId(allLogins[allLoginsIndex])
        }

    }
    return(
        <div>
            {usernameNotFound === true ? <UsernameNotFound setUsernameNotFound={setUsernameNotFound}/> : <></>}
            {passwordFalse === true ? <PasswordFalse setPasswordFalse={setPasswordFalse}/> : <></>}
            {createNewLogin === true ? <CreateNewLogin allLogins={allLogins} setAllLogins={setAllLogins} setCreateNewLogin={setCreateNewLogin}/>:<></>}
            <form onSubmit={checkPassword}>
                <a>email</a>
                <input type="email" id="email"/>
                <a>Password</a>
                <input type="password" id="password"/>
                <button type="submit">Log in</button>
            </form>
            <button onClick={()=> setCreateNewLogin(true)}>Create new Login</button>
        </div>
    )
}