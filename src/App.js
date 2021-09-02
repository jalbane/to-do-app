import React, {useState} from 'react'
import './App.css';
import Login from  './components/Login';
import Todo from  './components/Todo';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState()
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = "/" component={() => <Login setLoggedIn={setLoggedIn}/>}></Route>
          <Route exact path = "/home" component={() => <Todo setLoggedIn={setLoggedIn}/>}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
