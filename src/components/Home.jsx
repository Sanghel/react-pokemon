import React from 'react';
import { Container, Grid } from '@mui/material';
import { Context } from './Context';
import { LoadingSkeleton } from './LoadingSkeleton';
import { PokemonCard } from './PokemonCard';
import '../styles/Home.css';

function Home() {
  const { pokemon } = React.useContext(Context);
  const { loading, error, pokemons } = pokemon

  return (
    <>
      <Container 
        maxWidth='lg'
        className='main-container'
      >
        <Grid container spacing={2}>
          {loading && <LoadingSkeleton />
          }
          {!loading && pokemons?.map((poke, index) => (
            <PokemonCard 
              key={index}
              poke={poke}
            />
          ))}
          {!loading && error && (
            <h1>{error}</h1>
          )}
        </Grid>
      </Container>
    </>
  )
}

export { Home };