import { useState } from "react";
import UsernameNotFound from "./usernameNotFound";
import PasswordFalse from "./passwordFalse";
import CreateNewLogin from "./createNewLogin";

export default function Login({setLoginStatus, loginId, setLoginId}){
    const [usernameNotFound, setUsernameNotFound]= useState(false)
    const [passwordFalse, setPasswordFalse] = useState(false)
    const [createNewLogin, setCreateNewLogin] = useState(false)
    const checkPassword = event =>{
        event.preventDefault();
        const username = event.target.username.value.toString()
        const password = event.target.password.value.toString()
        const lookForUsername = (element) => element.name === username;
        const usernameIndex = loginId.findIndex(lookForUsername)
        console.log(usernameIndex)
        if(usernameIndex < 0){
            return(
                setUsernameNotFound(true)
            )} 
        const comparePassword = loginId[usernameIndex]
        console.log(comparePassword.password)
        console.log(password)
        if(password !== comparePassword.password){
            return(
                setPasswordFalse(true)
            )
        } else {
            setLoginStatus(username)
        }

    }
    return(
        <div>
            {usernameNotFound === true ? <UsernameNotFound setUsernameNotFound={setUsernameNotFound}/> : <></>}
            {passwordFalse === true ? <PasswordFalse setPasswordFalse={setPasswordFalse}/> : <></>}
            {createNewLogin === true ? <CreateNewLogin loginId={loginId} setLoginId={setLoginId} setCreateNewLogin={setCreateNewLogin}/>:<></>}
            <form onSubmit={checkPassword}>
                <a>Username</a>
                <input type="text" id="username"/>
                <a>Password</a>
                <input type="password" id="password"/>
                <button type="submit">Log in</button>
            </form>
            <button onClick={()=> setCreateNewLogin(true)}>Create new Login</button>
        </div>
    )
}