import React from 'react';
import Button from '@mui/material/Button';

export default function RatingButtons () {



  return (
    <div className="rating-buttons" style={{display: 'flex', width: '100%', justifyContent: 'center'}}>
      <Button
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      >1
      </Button>
      <Button
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      >2
      </Button>
      <Button
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      >3
      </Button>
      <Button
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      >4
      </Button>
      <Button
      variant='contained'
      sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
      >5
      </Button>
    </div>
  )
}