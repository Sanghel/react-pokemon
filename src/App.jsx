import React from 'react';
import { Routes, Route, useHistory } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { Favourites } from './components/Favourites';
import { PokemonDetails } from './components/PokemonDetails';



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/favourites' element={<Favourites />} />
        <Route exact path='/details=' element={<PokemonDetails />} />
      </Routes>
    </>
  );
}

export { App } ;
