import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Context = React.createContext();

function Provider(props) {
  const [pokemon, setPokemon] = useState([]);
  // const [isFavourite, setIsFavourite] = useState(false);
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  const loadData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=251')
      .then(res => {
        for (let i = 0; i < res.data.results.length; i++) {
          axios.get(res.data.results[i].url)
            .then(result => {
              // pokemon.isFavourite = false;
              setPokemon(prevArray => [...prevArray, result.data])
              // console.log(pokemon.isFavourite);
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
    // pokemon.map(poke => {
    //   if (poke.name === name) {
    //     setFavourites(prevArray => [...prevArray, poke]);
    //     poke.isFavourite = true;
    //     const newPokemons = [...pokemon];
    //     // console.log(poke.isFavourite);
    //     setPokemon(newPokemons);
    //     console.log(pokemon.isFavourite);
    //   }
    // })
    // console.log(pokemon.isFavourite)
    const pokeIndex = pokemon.findIndex(poke => poke.name === name);
    const newPokemons = [...pokemon];
    newPokemons.isFavourite = false;
    newPokemons[pokeIndex].isFavourite = !newPokemons[pokeIndex].isFavourite;
    setPokemon(newPokemons);
    setFavourites(prevArray => [...prevArray, newPokemons[pokeIndex]])
    // console.log(pokemon.isFavourite);
  }
  const deleteFavourites = (name) => {
    for (let i = 0; i < favourites.length; i++) {
      if (favourites[i].name === name) {
        favourites.splice( i , 1 );
        const pokeIndexDelete = pokemon.findIndex(poke => poke.name === name);
        const newPokemonsDelete = [...pokemon];
        newPokemonsDelete.isFavourite = false;
        newPokemonsDelete[pokeIndexDelete].isFavourite = !newPokemonsDelete[pokeIndexDelete].isFavourite;
        setPokemon(newPokemonsDelete);
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