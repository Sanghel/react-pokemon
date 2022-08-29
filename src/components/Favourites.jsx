import React from 'react';
import { Context } from './Context';
import { Container, Grid, Typography, Skeleton } from '@mui/material';
import { PokemonCard } from './PokemonCard';
import '../styles/Home.css';

function Favourites() {
  const { favourites, pokemon } = React.useContext(Context);
  const { loading } = pokemon;

  return (
    <Container 
      maxWidth='lg'
      className='main-container'
    >
      <Typography
        variant='h4'
        color='secondary'
        align='center'
      >
        Favourites
      </Typography>
      {loading && <Skeleton variant="rounded" width={210} height={300} />}
      {!favourites.length && !loading && <Typography>You don't have any Favourite Pokemon!</Typography>}
      {favourites && !loading && <Grid container spacing={2}>
            {favourites.map((poke, index) => (
              <PokemonCard 
                key={index}
                poke={poke}
              />
            ))}
          </Grid>
        }
    </Container>
  )
}

export { Favourites };