import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getStorageItem, setStorageItem } from '../utils/Storage';

const Context = React.createContext();

function Provider(props) {
  const [pokemon, setPokemon] = useState({loading: true, error: null, pokemons: []});
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();
  let count = 1
  const loadData = async () => {
    if (count > 1) return
    count++
    try {
      const pokemonsStoraged = getStorageItem('pokemons');
      const pokemonStoragedArray = pokemonsStoraged.map(poke => poke.id)
      const resPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=251')
      const values = await Promise.all(resPokemons.data.results.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url)
        const dataPoke = data;
        if (pokemonStoragedArray.includes(dataPoke.id)) {
          dataPoke.isFavourite = true;
        }
        return dataPoke
      }))
      setPokemon({
        ...pokemon,
        loading: false,
        pokemons: values
      })
      const pokeFavo = values.filter(poke => !!poke?.isFavourite);
      setFavourites(pokeFavo);
    } catch (error) {
      setPokemon({
        ...pokemon,
        loading: false,
        error: error?.message ?? 'error'
      })
    }
  };

  useEffect(() => {
    loadData()
    
  }, []);
  
  const onDetails = (poke) => {
    navigate(`/details/${poke.id}`);
  }
  const onHome = () => {
    navigate('/');
  }
  const onFavourites = () => {
    navigate('/favourites');
  }
  const saveFavourites = (id) => {
    const values = pokemon.pokemons.map(poke => {
      if (poke.id === id) {
        poke.isFavourite = !poke?.isFavourite;
      }
      return poke;
    })
    setPokemon({
      ...pokemon,
      pokemons: values  
    })

    const pokeFavo = values.filter(poke => !!poke?.isFavourite);
    setFavourites(pokeFavo);
    setStorageItem('pokemons', pokeFavo);
  }
  const deleteFavourites = (id) => {
    const values = pokemon.pokemons.map(poke => {
      if (poke.id === id) {
        poke.isFavourite = !poke?.isFavourite;
      }
      return poke;
    })
    setPokemon({
      ...pokemon,
      pokemons: values  
    })

    const pokeFavo = values.filter(poke => !!poke?.isFavourite);
    setFavourites(pokeFavo);
    setStorageItem('pokemons', pokeFavo);
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