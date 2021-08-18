import React, { useState } from 'react';
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [newtodo, setnewtodo] = useState("");
  const[todos, settodos] = useState([]);

  function addtodo() {
    settodos([...todos, newtodo]);
  }

  function deletetodo(index) {
    var modifiedList = [...todos]
    modifiedList.splice(index,1);
    settodos(modifiedList);
  }

  const tasklist = todos.map((object, index)=>{
    return <div className="row justify-content-center">
            <h1 className="col-md-6 text-start">{index+1}. {object}</h1>
            <button onClick={()=>{deletetodo(index)}} className="btn btn-danger col-md-1">Delete</button>
          </div>
  
  })

  return (
    <div className="App">
      <h1>React ToDoList</h1>
      <div className="row justify-content-center">
        <input className="col-md-6 m-1" type="text" placeholder="Add todo!" value={newtodo} onChange={(e)=>{setnewtodo(e.target.value)}}></input>
        <button type="submit" onClick={addtodo} className="btn btn-primary col-md-1 m-1">Add Task</button>
      </div>
      {tasklist}
    </div>
  );
}

export default App;
