import React from 'react';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { ButtonCard } from './ButtonCard';
import '../styles/Home.css';

import { Context } from './Context';

function PokemonCard({ poke }) {
  const { onDetails } = React.useContext(Context);
  return (
    <>
      <Grid item xs={12} sm={2}>
        <Card className='card' >
          <CardActionArea onClick={() => onDetails(poke.name)} >
            <CardContent>
              <CardMedia 
                className='cardMedia'
                image={poke.sprites.front_default}
              />
              <Typography>
                <b>{poke.name}</b>
              </Typography>
                <h6>
                  Pokedex Number:
                  <span> {poke.id} </span>
                </h6>
            </CardContent>
          </CardActionArea>
          <ButtonCard 
            poke={poke}
          />
        </Card>
      </Grid>
    </>

  )
}

export { PokemonCard };