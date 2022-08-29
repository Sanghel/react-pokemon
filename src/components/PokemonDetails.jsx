import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Context } from './Context';
import '../styles/PokemonDetails.css'

function PokemonDetails() {
  const params = useParams();
  const { pokemon, onHome } = React.useContext(Context);
  const { pokemons, loading } = pokemon;
  let pokemonDetails = pokemons.find(p => p.id === parseInt(params.id, 10))

  return (
    <Container className='main-container--details' maxWidth='lg'>
      {loading 
        ? (<p>Loading...</p>)
        : ( <Card className='card--details'>
              <CardMedia 
                component='img'
                alt='pokemon'
                image={pokemonDetails.sprites.front_default}
                className='cardMedia--details'
              />
              <Typography variant='h2'>Details</Typography>
              <Typography variant='h6'>Name:</Typography>
              <Typography variant='subtitle2'>{pokemonDetails.name}</Typography>
              <Typography variant='h6'>Pokedex ID:</Typography>
              <Typography variant='subtitle2'>{pokemonDetails.id}</Typography>
              <Typography variant='h6'>Weight:</Typography>
              <Typography variant='subtitle2'>{pokemonDetails.weight} lbf</Typography>
              <Typography variant='h6'>Height:</Typography>
              <Typography variant='subtitle2'>{pokemonDetails.height} ft</Typography>
              
              <Button onClick={() => onHome()}>
                Home
              </Button>
            </Card>
          )
        }
    </Container> 
  )
}

export { PokemonDetails };