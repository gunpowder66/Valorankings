import { useState, useEffect } from 'react';
import  Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import VideoPop from './VideoPop.js';


export default function Cards ({ gun }) {
  const [renderedGun, setRenderedGun] = useState(gun.displayIcon ? gun.displayIcon : gun.chromas[0].displayIcon);


  useEffect (() => {
    const check = gun.displayIcon ? gun.displayIcon : gun.chromas[0].displayIcon
    setRenderedGun(check);
  },[gun])

  const chromaClick = (e) => {
    setRenderedGun(e.target.name);
  }

  return (
    <div className="card">

      <div className="gun-name">{gun.displayName}</div>
      <img className="rendered-gun" src={renderedGun} alt="gun thumbnail"/>


      {gun.chromas.length > 1 ?
      <div className="all-chromas">
          STYLES
          <div className="chroma-map">
            {gun.chromas.map((chroma, index) => (
              <div className="chroma-crop">
              <input
                type="image"
                className="chromas"
                src={chroma.swatch}
                name={chroma.fullRender}
                onClick={(e) => {chromaClick(e)}}
                alt="chroma"
                key={`chroma${index}`}/>
              </div>
            ))}
          </div>
        </div> : <></>}

      <VideoPop gunLevel={gun.levels}/>



    </div>

  )
}