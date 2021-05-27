import React from 'react';
import HomePage from './components/HomePage';
import './App.css';
import {Route , Switch} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>

    <Route exact path="/">

    <div className="App">
      <HomePage/>
    </div>
    </Route>
    </Switch>
  );
}

export default App;
