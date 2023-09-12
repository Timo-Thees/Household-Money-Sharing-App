import EmailTaken from "./emailTaken";
import { useState } from "react";

export default function CreateNewLogin({setCreateNewLogin, allLogins, setAllLogins}){
    const [emailTaken, setEmailTaken] = useState(false)
    const createNewUsername = event =>{
        event.preventDefault();
        const email = event.target.newEmail.value.toString();
        const username = event.target.newUsername.value.toString();
        const password = event.target.newPassword.value.toString();
        const lookForEmailTaken = (element) => element.email === email;
        const isEmailTaken = allLogins.findIndex(lookForEmailTaken)
        if(isEmailTaken >= 0){
            return(
                setEmailTaken(true)
            )
        } 
        const newUser = {email: email, name: username, password: password}
        setAllLogins([...allLogins, newUser])
        setCreateNewLogin(false)
    }
    return(
        <div>
            {emailTaken === true ? <EmailTaken setEmailTaken={setEmailTaken}/> : <></>}
            <form onSubmit={createNewUsername}>
                <a>Email</a>
                <input type="email" id="newEmail"/>
                <a>Username</a>
                <input type="text" id="newUsername"/>
                <a>Password</a>
                <input type="password" id="newPassword"/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}