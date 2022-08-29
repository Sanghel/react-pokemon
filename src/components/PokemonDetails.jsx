import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

import axios from 'axios';
import { Context } from './Context';
import { PokemonCard } from './PokemonCard';
import '../styles/PokemonDetails.css'

function PokemonDetails() {
  // const [pokemonDetails, setPokemonDetails] = useState([]);

  // useEffect(() => {
  //   if(!pokemonDetails) {
  //     const pokeData = async () => {
  //       // const resPoke = await 
  //     }
  //   }
  // }, [])

  const params = useParams();

  const { pokemon, onHome } = React.useContext(Context);
  const { pokemons, loading } = pokemon;

  // console.log(pokemonDetails, pokemons, params)
  console.log('params:', params)
  
  let pokemonDetails = pokemons.find(p => p.id === parseInt(params.id, 10))
  console.log(pokemonDetails?.sprites?.front_default)
  
  // const onPokeDetails = async () => {
  //    if (!pokeDet) {
  //     try {
  //       const resPokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
  //       pokeDet = resPokemons.data;
  //       console.log(resPokemons);
  //     } catch (error) {
        
  //     }
  //   }
  //   setPokemonDetails(pokeDet);
  //  }

  // useEffect(() => {onPokeDetails()}, []);
  
  return (
        <Container
          className='main-container--details'
          maxWidth='sm'
        >
      {loading ? (
        <p>Loading</p>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Card
              className='card--details'
            >
              <CardActionArea>
                <CardContent>
                  <h2>Details</h2>
                  <Typography>
                      <b>{ pokemonDetails.name }</b>
                  </Typography>
                  {/* <CardMedia 
                      // image={pokemonDetails.sprites.front_default}
                      image='https://picsum.photos/200/300'
                    />  */}
                  {/* <Typography> */}
                    <ul className='list--details'>
                      <li><b>Pokedex Number:</b> { pokemonDetails.id }</li>
                      <li><b>Height:</b> {pokemonDetails.height} ft</li>
                      <li><b>Weight:</b> {pokemonDetails.weight} lbf</li>
                      {/* <li><b>First Skill:</b> {pokemonDetails.abilities[0].ability.name} </li> */}
                      {/* <li><b>Second Skill:</b> {pokemonDetails.abilities[1].ability.name} </li> */}
                    </ul>
                  {/* </Typography> */}
                </CardContent>
              </CardActionArea>
              <Button onClick={() => onHome()}>
                Home
              </Button>
            </Card> 
          </Grid>
        </Grid>
        

      )}
      </Container>  
  )
}

export { PokemonDetails };