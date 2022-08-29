import React from 'react';
import { IconButton } from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import GradeIcon from '@mui/icons-material/Grade';
import { Context } from './Context';
import '../styles/Icon.css';

function ButtonCard({ poke }) {
  const { saveFavourites, deleteFavourites } = React.useContext(Context);
  return (
    <>
      {!poke.isFavourite && 
        <IconButton 
          color="secondary" 
          aria-label="upload picture" 
          component="label" 
          className='favorite--icon'
          onClick={() => saveFavourites(poke.id)}
        >
          <StarOutlineIcon  />
        </IconButton>
      }
      {!!poke.isFavourite && 
        <IconButton 
          color="secondary" 
          aria-label="upload picture" 
          component="label" 
          className='favorite--icon'
          onClick={() => deleteFavourites(poke.id)} 
        >
          <GradeIcon />
        </IconButton>
      }
    </>
  )
}

export { ButtonCard };