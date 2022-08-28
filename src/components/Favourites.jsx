import React from 'react';
import { Context } from './Context';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import '../styles/Home.css';

function Favourites() {
  const { favourites, deleteFavourites, onDetails } = React.useContext(Context);
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
              <CardActionArea onClick={() => onDetails(poke.name)}>
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
              <IconButton 
                color="secondary" 
                aria-label="upload picture" 
                component="label" 
                className='favorite--icon'
              >
                {/* <input hidden accept="image/*" type="file" /> */}
                {/* {!poke.isFavourite && <StarOutlineIcon onClick={() => saveFavourites(poke.name)} />} */}
                <GradeIcon onClick={() => deleteFavourites(poke.name)} />
              </IconButton>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export { Favourites };