import React, {useState} from 'react'
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {useHistory} from "react-router-dom"
import "./Navbar.css"

function Navbar() {

    const [username, setUserame] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    function logout(){
        localStorage.removeItem("loggedin");
        history.push("/")
        window.location.reload(true)
    }

    function login(){
        let users = JSON.parse(localStorage.getItem("users"));
        var i=0;
        for(let user of users){
            if(user.username === username && user.password === password){
                i++;
            }
        }
        if(i===1){
            alert("You are logged in!");
            localStorage.setItem("loggedin", "loggedin");
            history.path("/dashboard")
            window.location.reload(true);
        }
        else{
            alert("Invalid username or password!")
        }
    }

    return (
        <div className="row nav">
            <div className="col-md-6">
                <h1>FACEBOOK</h1>
            </div>
            <div className="col-md-6">
                {
                    (()=>{
                        if(localStorage.getItem("loggedin")){
                            return <button onClick={logout} >Logout</button>
                        }else{
                            return <div>
                                        <input type="text" placeholder="username" value={username}  onChange={(e)=>{setUserame(e.target.value)}}></input>
                                        <input type="text" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                                        <button onClick={login} >Login</button> 
                                    </div>
                        }
                    })()
                }
            </div>
        </div>
    )
}

export default Navbar

