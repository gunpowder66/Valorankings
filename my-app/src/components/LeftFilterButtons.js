import react from 'react';
import Knife from '../pics/Knife_icon.jpg';
import Shorty from '../pics/Shorty_icon.jpg';
import Classic from '../pics/Classic_icon.jpg';
import Frenzy from '../pics/Frenzy_icon.jpg';
import Ghost from '../pics/Ghost_icon.jpg';
import Sheriff from '../pics/Sheriff_icon.jpg';
import Stinger from '../pics/Stinger_icon.jpg';
import Spectre from '../pics/Spectre_icon.jpg';
import Button from '@mui/material/Button';

export default function LeftFilterButtons ({ filterGuns, setAppear, resetFilter, randomRender}) {


  return (
    <>
    <Button
      onClick={() => {
        resetFilter();
        setAppear(state => !state);
      }}
      sx={{border: '1px solid rgb(199, 209, 216)', color: 'rgb(199, 209, 216)', width: '25%', marginBottom: '5%'}}
      variant='outlined'
      value={'Reset'}
      >Reset
      </Button>
      <Button
      onClick={() => {
        randomRender();
        setAppear(state => !state);
      }}
      sx={{border: '1px solid rgb(199, 209, 216)', color: 'rgb(199, 209, 216)', width: '25%', marginBottom: '5%'}}
      variant='outlined'
      value={'Reset'}
      >Random
      </Button>
    <input
        type="image"
        src={Knife}
        alt='cringe'
        className="filter-pics"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Melee"
        />
    <input
        type="image"
        src={Classic}
        alt='cringe'
        className="filter-pics"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Classic"
        />
    <input
        type="image"
        src={Shorty}
        alt='cringe'
        className="filter-pics"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Shorty"
        />
    <input
        type="image"
        src={Frenzy}
        alt='cringe'
        className="filter-pics"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Frenzy"
        />
    <input
        type="image"
        src={Ghost}
        alt='cringe'
        className="filter-pics"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Ghost"
        />
    <input
        type="image"
        src={Sheriff}
        alt='cringe'
        className="filter-pics"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Sheriff"
        />
    <input
        type="image"
        src={Stinger}
        alt='cringe'
        className="filter-pics"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Stinger"
        />
    <input
        type="image"
        src={Spectre}
        alt='cringe'
        className="filter-pics"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Spectre"
        />

    </>
  )
}
