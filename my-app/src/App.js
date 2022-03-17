import {useState, useEffect, useRef} from 'react';
import axios from 'axios';
import './App.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import RatingButtons from './components/RatingButtons'
import LeftFilterButtons from './components/LeftFilterButtons'
import RightFilterButtons from './components/RightFilterButtons'
import Button from '@mui/material/Button';



import Card from './components/Card.js';

function App() {
  const isInitialMount = useRef(true);
  const [skinData, setSkinData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [gun, setGuns] = useState([]);
  const [gunCount, setGunCount] = useState(0);
  const [appear, setAppear] = useState(false);
  // console.log(gun);
  // console.log(gunLength);

  const getGuns = () => {
    return axios.get('https://valorant-api.com/v1/weapons/skins')
  }

  useEffect(() => {
    getGuns()
      .then((data) => {
        setSkinData(data.data.data)
        setGuns(data.data.data[gunCount])
      })
  }, [])

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      if (filtered.length !== 0) {
        setGuns(filtered[gunCount])
      } else {
        setGuns(skinData[gunCount])
      }
    }
  },[gunCount])

  const filterGuns = (e) => {
    axios.get('http://localhost:3001/rankings')
      .then((data) => {
        let typeData = data.data.filter((gun) => gun.name === e.target.value)
        let filtered = [];
        for (let i = 0; i < skinData.length; i++) {
          for (let k = 0; k < typeData.length; k++) {
            if (typeData[k].gun_name === skinData[i].displayName) {
              filtered.push(skinData[i])
              break;
            }
          }
        }
        console.log(filtered)
        setGuns(filtered[0]);
        setFiltered(filtered);
        setGunCount(0);
      })
  }

  const nextGun = () => {
    setGunCount((prevGun) => {
      return prevGun + 1
    })
  }

  const prevGun = () => {
      setGunCount((prevGun) => {
        return prevGun - 1
      })
  }

  const resetFilter = () => {
    setFiltered([]);
    setGuns(skinData[0]);
    setGunCount(0);
  }

  const randomRender = () => {
    const randomNum = Math.floor(Math.random() * 450);
    setFiltered([]);
    setGuns(skinData[randomNum]);
    setGunCount(randomNum);
  }

  return (
    <>
    {gun.length === 0 ?
    <div>Loading...</div> :
    <div className="all">
      <div className="left-filter-buttons">
        <LeftFilterButtons filterGuns={filterGuns} setAppear={setAppear} resetFilter={resetFilter} randomRender={randomRender}/>
      </div>
      <div className="middle-stuff">
        <div className="top-middle">
                <SwitchTransition mode="out-in">
                  <CSSTransition
                    key={appear}
                    addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                    classNames='fade'
                  >
                    {appear ? <Card gun={gun}/> : <Card gun={gun}/> }
                  </CSSTransition>
                </SwitchTransition>

              </div>
              <div className="rating-box">
               <div style={{textAlign: 'center'}}>
                <Button
                  onClick={() => {
                    nextGun()
                    setAppear(state => !state)
                  }}
                  variant='contained'
                  sx={{ marginBottom: '5%', backgroundColor: 'rgba(18, 26, 36, 0.9)' }}
                  > No Opinion Go Next
                </Button>
               </div>

                <div style={{textAlign: 'center'}}>
                    Rate This Skin
                </div>
                <RatingButtons gun={gun} nextGun={nextGun} setAppear={setAppear}/>
          </div>
        </div>
        <div className="right-filter-buttons">
          <RightFilterButtons filterGuns={filterGuns} setAppear={setAppear}/>
        </div>
      </div>
        }
    </>

  )

}

export default App;
