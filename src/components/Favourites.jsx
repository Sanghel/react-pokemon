import React from 'react';
import { Context } from './Context';
import { Container, Grid } from '@mui/material';
import '../styles/Home.css';
import { PokemonCard } from './PokemonCard';

function Favourites() {
  const { favourites } = React.useContext(Context);
  return (
    <>
      <Container 
        maxWidth='lg'
        className='main-container'
      >
        <Grid container spacing={2}>
          {favourites.map((poke, index) => (
            <PokemonCard 
              poke={poke} 
              key={index} 
            />
          ))}
        </Grid>
      </Container>
    </>
  )
}

export { Favourites };