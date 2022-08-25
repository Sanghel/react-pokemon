import React from 'react';
import { Grid, AppBar, Toolbar, CssBaseline, Button, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

function NavBar() {
    const history = useHistory();

  return (
    <>
        <CssBaseline />
        <AppBar color='secondary'>
            <Toolbar>
              <Typography style={{flexGrow: 1 }} >Pokemon APP</Typography>
              <Button variant='text' color='inherit' onClick={() => history.push('/')}> 
                Home
              </Button>
              <Button variant='text' color='inherit' onClick={() => history.push('/favourites')}> 
                Favourites
              </Button>
            </Toolbar>
        </AppBar>
    </>
  )
}

export { NavBar };