import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom"
import Navbar from './Navbar';
import Body from './Body';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route path="/" component={Body} exact/>
        <Route path="/dashboard" component={Dashboard} exact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
