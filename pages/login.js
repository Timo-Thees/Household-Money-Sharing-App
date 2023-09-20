import { useState } from "react";
import UsernameNotFound from "./usernameNotFound";
import PasswordFalse from "./passwordFalse";
import CreateNewLogin from "./createNewLogin";
import {Overlay} from '@/components/styledComponents'
import styled from "styled-components";

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
            <TextBox>
                <FlexForm onSubmit={checkPassword}>
                    <a>Username</a>
                    <input type="text" id="username"/>
                    <a>Password</a>
                    <input type="password" id="password"/>
                    <Button type="submit">Log in</Button>
                </FlexForm>
                <Button onClick={()=> setCreateNewLogin(true)}>Create new Login</Button>
            </TextBox>

        </div>
    )
}

const GreenBox = styled.div`
display: flex;
flex-direction: colum;
background-color: #7ECA5A;
outline: 1px solid #358D16;
outline-offset: -20px,
box-shadow: 10px 10px ;
min-width: 60vw;
min-height: 30vh;
padding: 30px;
`

const Button = styled.button`
background-color: #FFD337;
box-shadow: 5px 5px #BFA74F;
border-style: none;
border-radius: 50px;
padding: 20px;
color: white;
`

const TextBox = styled.div`
background-color: #7ECA5A;
padding: 55px;
outline: 3px solid #358D16;
outline-offset: -20px;
box-shadow: 5px 5px 10px #00000060;
min-width: 60vw;
min-height: 30vh;
display: flex;
flex-direction: column;
align-items: center;
& :not(:last-child){
    margin-bottom: 10px;
}
`

const FlexForm = styled.form`
display: flex; 
flex-direction: column;
align-items: center;
margin-bottom: 20px;
`