import React from 'react';
import { Context } from './Context';
import { Container, Grid, Typography } from '@mui/material';
import { PokemonCard } from './PokemonCard';
import '../styles/Home.css';

function Favourites() {
  const { favourites } = React.useContext(Context);

  return (
    <>
      <Container 
        maxWidth='lg'
        className='main-container'
      >
        {!favourites.length && <Typography>You don't have any Favourite Pokemon!</Typography>}
        {favourites && <Grid container spacing={2}>
              {favourites.map((poke, index) => (
                <PokemonCard 
                  key={index}
                  poke={poke}
                />
              ))}
            </Grid>
        }
      </Container>
    </>
  )
}

export { Favourites };