import React from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Favourites } from './components/Favourites';
import './App.css';



function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
          <Route exact path='/' name='Home'>
            <Home />
          </Route>
          <Route exact path='/favourites' name='Favourites'>
            <Favourites />
          </Route>
        </Switch>
    </Router>
  );
}

export { App } ;
