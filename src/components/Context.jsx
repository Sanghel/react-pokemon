import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Context = React.createContext();

function Provider(props) {
  const [pokemon, setPokemon] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=251')
      .then(res => {
        for (let i = 0; i < res.data.results.length; i++) {
          axios.get(res.data.results[i].url)
            .then(result => {
              setPokemon(prevArray => [...prevArray, result.data])
            })
        }
      })
  };


  useEffect(loadData, []);
  
  const onDetails = (name) => {
    navigate(`/details/${name}`);
  }
  const onHome = () => {
    navigate('/');
  }
  const onFavourites = () => {
    navigate('/favourites');
  }
  const saveFavourites = (name) => {
    const pokeIndex = pokemon.findIndex(poke => poke.name === name);
    const newPokemons = [...pokemon];
    const newFavouritePokemons = [...favourites];
    newPokemons.isFavourite = false;
    newPokemons[pokeIndex].isFavourite = !newPokemons[pokeIndex].isFavourite;
    setPokemon(newPokemons);
    newFavouritePokemons.push(newPokemons[pokeIndex])
    setFavourites(newFavouritePokemons)
    // setFavourites(prevArray => [...prevArray, newPokemons[pokeIndex]])
  }
  const deleteFavourites = (name) => {
    for (let i = 0; i < favourites.length; i++) {
      if (favourites[i].name === name) {
        favourites.splice( i , 1 );
        const pokeIndex = pokemon.findIndex(poke => poke.name === name);
        const newPokemons = [...pokemon];
        newPokemons.isFavourite = false;
        newPokemons[pokeIndex].isFavourite = !newPokemons[pokeIndex].isFavourite;
        setPokemon(newPokemons);
      }
    }
  }


    return (
        <Context.Provider value={{ 
            pokemon,
            setPokemon,
            onDetails,
            onHome,
            onFavourites,
            saveFavourites,
            favourites,
            setFavourites,
            deleteFavourites,
        }}>
            {props.children}
        </Context.Provider>
    );
}

export { Context, Provider };