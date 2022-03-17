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

export default function LeftFilterButtons ({ filterGuns, resetFilter }) {


  return (
    <>
    <Button
      onClick={resetFilter}
      sx={{marginLeft: '5%', marginBottom: '5%', marginTop: '5%', border: '1px solid rgb(199, 209, 216)', color: 'rgb(199, 209, 216)'}}
      variant='outlined'
      >Reset
      </Button>
    <input
        type="image"
        src={Knife}
        alt='cringe'
        className="filter-pics-rankings"
        onClick={(e) => {
          filterGuns(e);
          }}
        value="Melee"
        />
    <input
        type="image"
        src={Classic}
        alt='cringe'
        className="filter-pics-rankings"
        onClick={(e) => {
          filterGuns(e);
          }}
        value="Classic"
        />
    <input
        type="image"
        src={Shorty}
        alt='cringe'
        className="filter-pics-rankings"
        onClick={(e) => {
          filterGuns(e);
          }}
        value="Shorty"
        />
    <input
        type="image"
        src={Frenzy}
        alt='cringe'
        className="filter-pics-rankings"
        onClick={(e) => {
          filterGuns(e);
          }}
        value="Frenzy"
        />
    <input
        type="image"
        src={Ghost}
        alt='cringe'
        className="filter-pics-rankings"
        onClick={(e) => {
          filterGuns(e);
          }}
        value="Ghost"
        />
    <input
        type="image"
        src={Sheriff}
        alt='cringe'
        className="filter-pics-rankings"
        onClick={(e) => {
          filterGuns(e);
          }}
        value="Sheriff"
        />
    <input
        type="image"
        src={Stinger}
        alt='cringe'
        className="filter-pics-rankings"
        onClick={(e) => {
          filterGuns(e);
          }}
        value="Stinger"
        />
    <input
        type="image"
        src={Spectre}
        alt='cringe'
        className="filter-pics-rankings"
        onClick={(e) => {
          filterGuns(e);
          }}
        value="Spectre"
        />

    </>
  )
}
