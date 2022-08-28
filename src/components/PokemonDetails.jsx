import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Context } from './Context';
import '../styles/PokemonDetails.css'

function PokemonDetails() {

  const params = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);
  const { pokemon, onHome } = React.useContext(Context);

   const onPokeDetails = () => {
       pokemon.map(poke => {
         if (poke.name === params.name) {
           setPokemonDetails(poke);         
         }
       })
   }

  useEffect(onPokeDetails, []);
  
  return (
    <>
        <Container
          className='main-container--details'
          maxWidth='sm'
        >
        <Grid container spacing={2}>        
        <Grid item xs={12} sm={12}>
          <Card
            className='card--details'
          >
            <CardActionArea>
              <CardContent>
                <h2>Details</h2>
                <Typography>
                    <b>{ pokemonDetails.name }</b>
                </Typography>
                {/* <CardMedia 
                    className='cardMedia--details'
                    image={pokemonDetails.sprites.front_default}
                  /> */}
                {/* <Typography> */}
                  <ul className='list--details'>
                    <li><b>Pokedex Number:</b> { pokemonDetails.id }</li>
                    <li><b>Height:</b> {pokemonDetails.height} ft</li>
                    <li><b>Weight:</b> {pokemonDetails.weight} lbf</li>
                    {/* <li><b>First Skill:</b> {pokemonDetails.abilities[0].ability.name} </li> */}
                    {/* <li><b>Second Skill:</b> {pokemonDetails.abilities[1].ability.name} </li> */}
                  </ul>
                {/* </Typography> */}
              </CardContent>
            </CardActionArea>
            <Button onClick={() => onHome()}>
              Home
            </Button>
          </Card> 
        </Grid>
        </Grid>
        </Container>    
    </>
  )
}

export { PokemonDetails };