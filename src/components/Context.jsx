import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getStorageItem, setStorageItem, removeStorageItem } from '../utils/Storage';

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
      const resPokemons = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=251')
      const values = await Promise.all(resPokemons.data.results.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url)
        return data
      }))
      setPokemon({
        ...pokemon,
        loading: false,
        pokemons: values
      })
    } catch (error) {
      setPokemon({
        ...pokemon,
        loading: false,
        error: error?.message ?? 'error'
      })
    }
  };

  // useEffect(() => {
  //   getStorageItem(favourites)
  //   setFavourites(favourites);
  // }, []);
  console.log('Antes');
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

    // const pokeIndex = pokemon.pokemons.findIndex(poke => poke.id === id);
    // const newPokemons = [...pokemon];
    // const newFavouritePokemons = [...favourites];
    // newPokemons.isFavourite = false;
    // newPokemons[pokeIndex].isFavourite = !newPokemons[pokeIndex].isFavourite;

    
    // setPokemon(newPokemons);
    // newFavouritePokemons.push(newPokemons[pokeIndex])
    // setFavourites(newFavouritePokemons)
    // // setFavourites(prevArray => [...prevArray, newPokemons[pokeIndex]])
    // setStorageItem('pokemons', newPokemons[pokeIndex]);

    // const pokemonsStoraged = getStorageItem('pokemons') ?? {}
    // const newPokemon = newPokemons[pokeIndex]
    // setStorageItem('pokemons', {
    //   ...pokemonsStoraged,
    //   [newPokemon.id]: newPokemon
    // });
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
    // for (let i = 0; i < favourites.length; i++) {
    //   if (favourites[i].name === name) {
    //     favourites.splice( i , 1 );
    //     const pokeIndex = pokemon.findIndex(poke => poke.name === name);
    //     const newPokemons = [...pokemon];
    //     // newPokemons.isFavourite = false;

        
    //     newPokemons[pokeIndex].isFavourite = !newPokemons[pokeIndex].isFavourite;
    //     setPokemon(newPokemons);
    //     removeStorageItem(name);
    //   }
    // }
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