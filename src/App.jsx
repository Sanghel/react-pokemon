import React from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
import { Provider } from './components/Context'
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Favourites } from './components/Favourites';
import { PokemonDetails } from './components/PokemonDetails';

function App() {

  return (
    <Provider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/favourites' element={<Favourites />} />
        <Route path='details/:id' element={<PokemonDetails />} />        
      </Routes>
    </Provider>
  );
}

export { App } ;
