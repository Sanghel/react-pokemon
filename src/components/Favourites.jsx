import React from 'react';
import { Context } from './Context';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import '../styles/Home.css';

function Favourites() {
  const { favourites, deleteFavourites } = React.useContext(Context);
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
                  </Typography>
                    <h6>
                      Pokedex Number:
                      <span> {poke.id} </span>
                    </h6>
                  {/* <Button onClick={() => onDetails(poke.name)}>
                    Details
                  </Button> */}
                </CardContent>
              </CardActionArea>
              <Button onClick={() => deleteFavourites(poke.name)}>
                Quitar de Favoritos
              </Button>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export { Favourites };