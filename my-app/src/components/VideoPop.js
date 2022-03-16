import { useState } from 'react';
import  Popover from '@mui/material/Popover';
import Fab from '@mui/material/Fab';

export default function VideoPop ({ gunLevel }) {
  const [anchor, setAnchor] = useState(null);

  const openPopover = (e) => {
    setAnchor(e.currentTarget);
  }

  return (
    <>
    { gunLevel.length > 1 ?
      <div className="gun-levels">
            <div className="chroma-map">
          {gunLevel.map((level, index) => (
            <div key={`level${index}`}>
            <Fab
            sx={{ margin: '5px', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
            variant='circular'
            color='primary'
            onClick={openPopover}
            size='small'
            >
              {index}
            </Fab>
            <Popover
            sx={{
              border: '1px solid black',
            }}
            open={Boolean(anchor)}
            anchorEl={anchor}
            onClose={() => setAnchor(null)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical:"bottom",
              horizontal:"left",
            }}
            >
              <video style={{width: '600px', marginBottom: '-5.95px'}} muted autoplay="autoplay" controls>
                <source src={level.streamedVideo}/>
              </video>
            </Popover>
            </div>
          ))}
        </div>
      </div> : <></>}
    </>
  )
}