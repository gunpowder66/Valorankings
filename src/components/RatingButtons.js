import React from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function RatingButtons ({ gun, nextGun, setAppear }) {

  const ratingClick = (e) => {
    axios.put('http://localhost:3001/', {
      name: gun.displayName,
      total_rating: e.target.value
    })
    .then(() => console.log("voted"))
    .catch((err) => console.log(err))
  }

  return (
    <div className="rating-buttons" style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
      <Button
      onClick={(e) => {
        ratingClick(e);
        nextGun();
        setAppear(state => !state);
      }}
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      value={1}
      >1
      </Button>
      <Button
       onClick={(e) => {
        ratingClick(e);
        nextGun();
        setAppear(state => !state);
      }}
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      value={2}
      >2
      </Button>
      <Button
       onClick={(e) => {
        ratingClick(e);
        nextGun();
        setAppear(state => !state);
      }}
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      value={3}
      >3
      </Button>
      <Button
       onClick={(e) => {
        ratingClick(e);
        nextGun();
        setAppear(state => !state);
      }}
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      value={4}
      >4
      </Button>
      <Button
       onClick={(e) => {
        ratingClick(e);
        nextGun();
        setAppear(state => !state);
      }}
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      value={5}
      >5
      </Button>
    </div>
  )
}