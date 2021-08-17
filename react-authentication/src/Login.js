import React,{useState} from 'react'
// eslint-disable-next-line
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Login.css"
import swal from "sweetalert"

function Login() {

    const[username, setUsername]=  useState("");
    const [password, setPassword] = useState("");

    function validate(event){
        event.preventDefault()
        if(username==="javascript" && password==="password"){
            swal("Login Successful","You have logged in!","success")
        }else{
            swal("Error","Check your credentials again!","error");
        }
    }
    return (
        <div className="row">
            <div className="col-md-4 justify-content-center">
                <h1>User Authentication</h1>
                <form onSubmit={validate}>
                    <input type="text" placeholder="username" className="form-control" value={username} onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <input type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                    <input type="submit" className="btn btn-primary"></input>
                </form>
            </div>
        </div>
    )
}

export default Login
