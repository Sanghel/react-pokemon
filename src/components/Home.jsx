import React from 'react';
import { Container, Grid } from '@mui/material';
import { Context } from './Context';
import { PokemonCard } from './PokemonCard';
import '../styles/Home.css';

function Home() {
  const { pokemon } = React.useContext(Context);

  return (
    <>
      <Container 
        maxWidth='lg'
        className='main-container'
      >
        <Grid container spacing={2}>
          {pokemon.map((poke, index) => (
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

export { Home };