import React from 'react';
import { AppBar, Toolbar, CssBaseline, Button, Typography, IconButton } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Context } from './Context';

function NavBar() {
  const { onHome, onFavourites } = React.useContext(Context);

  return (
    <>
      <CssBaseline />
      <AppBar color='secondary'>
          <Toolbar>
            <IconButton onClick={() => onHome()}>
              <CatchingPokemonIcon />
            </IconButton>
            <Typography style={{flexGrow: 1 }} variant='h5' >  Pokedex</Typography>
            <Button variant='text' color='inherit' onClick={() => onHome()}> 
              Home
            </Button>
            <Button variant='text' color='inherit' onClick={() => onFavourites()}> 
              Favourites
            </Button>
          </Toolbar>
      </AppBar>
    </>
  )
}

export { NavBar };