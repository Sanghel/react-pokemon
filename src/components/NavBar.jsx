import React from 'react';
import { AppBar, Toolbar, CssBaseline, Button, Typography } from '@mui/material';
import { Context } from './Context';

function NavBar() {
  const { onHome, onFavourites } = React.useContext(Context);

  return (
    <>
      <CssBaseline />
      <AppBar color='secondary'>
          <Toolbar>
            <Typography style={{flexGrow: 1 }} >Pokedex</Typography>
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