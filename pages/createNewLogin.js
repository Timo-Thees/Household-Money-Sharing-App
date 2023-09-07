export default function CreateNewLogin({setCreateNewLogin, loginId, setLoginId}){
    const createNewUsername = event =>{
        event.preventDefault();
        const username = event.target.newUsername.value.toString();
        const password = event.target.newPassword.value.toString();
        const newUsernameAndPassword = {name: username, password: password}
        setLoginId([...loginId, newUsernameAndPassword])
        setCreateNewLogin(false)
    }
    return(
        <div>
            <form onSubmit={createNewUsername}>
                <a>Username</a>
                <input type="text" id="newUsername"/>
                <a>Password</a>
                <input type="password" id="newPassword"/>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}