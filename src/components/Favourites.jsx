import React from 'react';
import { Context } from './Context';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';

import '../styles/Home.css';

function Favourites() {
  const { favourites, setFavourites } = React.useContext(Context);
  return (
    <>
      <Container 
        maxWidth='lg'
        className='main-container'
      >
        <Grid container spacing={2}>
          {favourites.map((poke, index) => (
            <Grid key={index} item xs={12} sm={2}>
            <Card 
              className='card'
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
                  {/* <Button onClick={() => onDetails(poke.name)}>
                    Details
                  </Button>
                  <Button onClick={() => saveFavourites(poke.name)}>
                    Add to Favourites
                  </Button> */}
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export { Favourites };