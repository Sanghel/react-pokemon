import React from 'react';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';


function PokemonDetails() {
  return (
    <>
        <Container
          maxWidth='md'
        >         
          <Card>
            <CardActionArea>
              <CardContent>
                <CardMedia />
                <Typography>
                  <b>Charizard</b>
                  <h6>
                    Pokedex Number:
                    <span> #5</span>
                  </h6>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> 
        </Container>    
    </>
  )
}

export { PokemonDetails };