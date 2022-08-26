import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Context = React.createContext();

function Provider(props) {
    const [pokemon, setPokemon] = useState([]);
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

  useEffect(loadData , []);

  const onDetails = (id) => {
    navigate(`/details/${id}`);
  }
  const onHome = () => {
    navigate('/');
  }
  const onFavourites = () => {
    navigate('/favourites');
  }



    return (
        <Context.Provider value={{ 
            pokemon,
            setPokemon,
            onDetails,
            onHome,
            onFavourites,

        }}>
            {props.children}
        </Context.Provider>
    );
}

export { Context, Provider };