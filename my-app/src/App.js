import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import RatingButtons from './components/RatingButtons'

import Card from './components/Card.js';

function App() {
  const [gunLength, setGunLength] = useState(0);
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
        setGunLength(data.data.data.length)
      })
  }, [])

  useEffect(() => {
    getGuns()
      .then((data) => {
        let names = []
        data.data.data.map((gun) => {
          names.push(gun.displayName)
        })
        setGuns(data.data.data[gunCount])
      })
  },[gunCount])



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

  return (
    <>
    {gun.length === 0 ?
    <div>Loading...</div> :
      <div className="all">
           <div className="scrolling-buttons">
               <button
                  onClick={() => {
                    prevGun()
                    setAppear(state => !state)
                  }}
                  disabled={gunCount === 0}>
                  Prev
                </button>

                <button
                  onClick={() => {
                    nextGun()
                    setAppear(state => !state)
                  }}
                  disabled={gunCount === gunLength}>
                  Next
                </button>
              </div>

              <SwitchTransition mode="out-in">
                <CSSTransition
                  key={appear}
                  addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                  classNames='fade'
                >
                  {appear ? <Card gun={gun}/> : <Card gun={gun}/> }
                </CSSTransition>
              </SwitchTransition>

            <div className="rating-box">
              <div style={{marginLeft: '47%', marginTop: '2%'}}>
                  Rate This Skin
              </div>
              <RatingButtons gun={gun} nextGun={nextGun} setAppear={setAppear}/>
            </div>

            </div>
        }
    </>

  )

}

export default App;
