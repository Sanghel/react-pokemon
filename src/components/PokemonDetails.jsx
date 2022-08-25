import React from 'react';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


function PokemonDetails() {
  return (
    <>
        {/* <Card 
              className='card'
              onClick={() => onDetails()}
            >
              <CardActionArea>
                <CardContent>
                  <CardMedia 
                    className='cardMedia'
                    image={poke.sprites.front_default}
                  />
                  <Typography>
                    <b>{poke.name}</b>
                    <h6>
                      Pokedex Number:
                      <span> {poke.id} </span>
                    </h6>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card> */}
    </>
  )
}

export { PokemonDetails };