import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card, CardActionArea, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { Context } from './Context';

import '../styles/Home.css';

function PokemonDetails() {

  const params = useParams();
   const [pokemonDetails, setPokemonDetails] = useState([]);
  const { pokemon, onHome } = React.useContext(Context);

   const onPokeDetails = () => {
       pokemon.map(poke => {
         if (poke.name === params.name) {
           setPokemonDetails(poke);
           console.log(pokemonDetails)
          
         }
       })
   }

   useEffect(onPokeDetails);

  return (
    <>
        <Container
          className='main-container'
          maxWidth='sm'
        >         
          <Card
            className='card'
          >
            <CardActionArea>
              <CardContent>
                <h2>Details</h2>
                <Typography>
                    <b>{ pokemonDetails.name }</b>
                </Typography>
                {/* <CardMedia 
                    className='cardMedia'
                    image={pokemonDetails.sprites.front_default}
                  /> */}
                <Typography>
                  <ul>
                    <li>Pokedex Number: { pokemonDetails.id }</li>
                    <li>Height: {pokemonDetails.height} ft</li>
                    <li>Weight: {pokemonDetails.weight} lbf</li>
                    {/* <li>First Skill: {pokemonDetails.abilities[0].ability.name} </li> */}
                    {/* <li>Second Skill: {pokemonDetails.abilities[1].ability.name} </li> */}
                  </ul>
                </Typography>
                <Button onClick={() => onHome()}>
                  Back
                </Button>
              </CardContent>
            </CardActionArea>
          </Card> 
        </Container>    
    </>
  )
}

export { PokemonDetails };