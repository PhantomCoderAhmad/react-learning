import { useState } from "react";

function FormValidation(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [userValidation,setUserValidation] = useState(false);
    const [passwordValidation,setPasswordValidation] = useState(false);
    function Login(e){
        e.preventDefault();
        console.log(username,password);
        let username_length = username.length;
        if(username_length < 6){
            setUserValidation(true);
        } 
        let password_length = password.length;
        if(password_length < 6){
            setPasswordValidation(true);
        }

    }
    return(
        <div className="form_validation">
            <h1>Login Form Validation</h1>
            <form className="login_form" onSubmit={Login}>
                <input type="text" value={username} placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/><br/><br/>
                <span>{userValidation ? "Username length must be of 6" : ""}</span><br/>
                <input type="password" value={password} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/><br/><br/>
                <span>{passwordValidation ? "Password length must be of 6" : ""}</span><br/>
                
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default FormValidation;