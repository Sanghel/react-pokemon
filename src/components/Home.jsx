import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { Context } from './Context';
import '../styles/Home.css';

function Home() {
  const { pokemon, onDetails, saveFavourites, deleteFavourites } = React.useContext(Context);

  return (
    <>
      <Container 
        maxWidth='lg'
        className='main-container'
      >
        <Grid container spacing={2}>
          {pokemon.map((poke, index) => (
            <Grid key={index} item xs={12} sm={2}>
            <Card 
              className='card'
            >
              <CardActionArea 
                onClick={() => onDetails(poke.name)}
              >
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
              {/* <Button color="secondary" size='small' onClick={() => saveFavourites(poke.name)}>Add to Favourites</Button> */}
              
                {/* <input hidden accept="image/*" type="file" /> */}
                {!poke.isFavourite && 
                  <IconButton 
                    color="secondary" 
                    aria-label="upload picture" 
                    component="label" 
                    className='favorite--icon'
                    onClick={() => saveFavourites(poke.name)}
                  >
                    <StarOutlineIcon  />
                  </IconButton>
                }
                {!!poke.isFavourite && 
                  <IconButton 
                    color="secondary" 
                    aria-label="upload picture" 
                    component="label" 
                    className='favorite--icon'
                    onClick={() => deleteFavourites(poke.name)} 
                  >
                    <GradeIcon />
                  </IconButton>
                }
            </Card>
          </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export { Home };