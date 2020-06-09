import React from 'react';
import './App.css';
import Login from '../Login/Login';
import Navbar from '../NavBar/Navbar';
import { Switch, Route } from 'react-router-dom';
import Todo from '../Todo/Todo';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/todo' component={Todo} />
          <Route path='/' component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
