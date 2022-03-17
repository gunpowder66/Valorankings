import react from 'react';
import Bulldog from '../pics/Bulldog_icon.jpg';
import Guardian from '../pics/Guardian_icon.jpg';
import Phantom from '../pics/Phantom_icon.jpg';
import Vandal from '../pics/Vandal_icon.jpg';
import Marshal from '../pics/Marshal_icon.jpg';
import Operator from '../pics/Operator_icon.jpg';
import Bucky from '../pics/Bucky_icon.jpg';
import Judge from '../pics/Judge_icon.jpg';
import Ares from '../pics/Ares_icon.jpg';
import Odin from '../pics/Odin.jpg';

export default function RightFilterButtons ({ filterGuns, setAppear }) {


  return (
    <>
    <input
        type="image"
        src={Bulldog}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Bulldog"
        />
    <input
        type="image"
        src={Guardian}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Guardian"
        />
    <input
        type="image"
        src={Phantom}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Phantom"
        />
    <input
        type="image"
        src={Vandal}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Vandal"
        />
    <input
        type="image"
        src={Marshal}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Marshal"
        />
    <input
        type="image"
        src={Operator}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Operator"
        />
    <input
        type="image"
        src={Bucky}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Bucky"
        />
    <input
        type="image"
        src={Judge}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Judge"
        />
    <input
        type="image"
        src={Ares}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Ares"
        />
    <input
        type="image"
        src={Odin}
        alt='cringe'
        className="filter-pics-right"
        onClick={(e) => {
          filterGuns(e);
          setAppear(state => !state);
          }}
        value="Odin"
        />

    </>
  )
}