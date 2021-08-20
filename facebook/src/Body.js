import React, {useState} from 'react'
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function Body() {

    const [name, setName] = useState("")
    const [username, setUserame] = useState("")
    const [password, setPassword] = useState("")

    function registerUser(event){
        event.preventDefault()
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const newUser = {
            name: name,
            username: username,
            password: password
        }
        users.push(newUser);
        localStorage.setItem("users",JSON.stringify(users));
        alert("Registered Successfully!");
    }


    return (

        <div className="row justify-content-center">
            <div className="col-md-6">
                <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook logo"></img>
            </div>
            <div className="col-md-3">
                <h2>Register</h2>
                <form onSubmit={registerUser}>
                    <input type="text" placeholder="name" value={name} onChange={(e)=>{setName(e.target.value)}} className="form-control"></input>
                    <input type="text" placeholder="username" value={username} onChange={(e)=>{setUserame(e.target.value)}} className="form-control"></input>
                    <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} className="form-control"></input>
                    <input className="btn btn-success" type="submit" value="Sign Up"></input>
                </form>
            </div>
        </div>

    )
    
    
}

export default Body