import React from 'react';
import { AppBar, Toolbar, CssBaseline, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar() {
  const navigate = useNavigate();
  const onHome = () => {
    navigate('/');
  }
  const onFavourites = () => {
    navigate('/favourites');
  }

  return (
    <>
        <CssBaseline />
        <AppBar color='secondary'>
            <Toolbar>
              <Typography style={{flexGrow: 1 }} >Pokemon APP</Typography>
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