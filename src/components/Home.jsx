import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import '../styles/Home.css';
import axios from 'axios';

function Home() {
  // const URL = 'https://pokeapi.co/api/v2/';
  const [pokemon, setPokemon] = useState([]);

  const loadData = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=251')
      .then(res => {
        console.log(res.data)
        for (let i = 0; i < res.data.results.length; i++) {
          axios.get(res.data.results[i].url)
            .then(result => {
              setPokemon(prevArray => [...prevArray, result.data])
            })
        }
      })
  };

  useEffect(loadData , [])

  return (
    <>
      <Container 
        maxWidth='lg'
        className='main-container'
      >
        <Grid container spacing={2}>
          {pokemon.map((poke, index) => (
            <Grid key={index} item xs={12} sm={2}>
            <Card className='card'>
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
            </Card>
          </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export { Home };