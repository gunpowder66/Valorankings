import {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LeftRankButtons from './components/LeftRankButtons';
import RightRankButtons from './components/RightRankButtons'

const muiColor = {color: 'aliceblue', fontSize: '1.2em'}

export default function Rankpage () {
  const [guns, setGuns] = useState([]);
  const [rendered, setRendered] = useState([]);


  const getTable = () => {
   return axios.get('http://localhost:3001/rankings')
  }

  const getGuns = () => {
    return axios.get('https://valorant-api.com/v1/weapons/skins')
  }

  useEffect(() => {
    axios.all([getTable(), getGuns()])
      .then(axios.spread((data1, data2) => {
        let finArr = data1.data;
        let disposeArr = data2.data.data;

        for (let i = 0; i < finArr.length; i++) {
          for (let k = 0; k < disposeArr.length; k++) {
            if (disposeArr[k].displayName === finArr[i].gun_name) {
              if (disposeArr[k].displayIcon === null) {
                finArr[i].picture = disposeArr[k].chromas[0].displayIcon;
                continue;
              }
              finArr[i].picture = disposeArr[k].displayIcon;
              continue;
            }
          }
        }
        // finArr.sort((a, b) => (b.total_rating / b.count) - (a.total_rating / a.count))
        setGuns(finArr);
        setRendered(finArr);
      }))
      .catch((err) => console.log(err))
  },[])

  const filterGuns = (e) => {
    let newRender = [];

    for (let i = 0; i < guns.length; i++) {
      if (guns[i].name === e.target.value) {
        newRender.push(guns[i])
      }
    }
    setRendered(newRender);
  }

  const resetFilter = (e) => {
    setRendered(guns)
  }

  if (rendered.length === 0) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='ranking-page'>
        <div className="left-filter-buttons-rankings">
          <LeftRankButtons filterGuns={filterGuns} resetFilter={resetFilter}/>
        </div>
        <div className="middle-rankings">
            <TableContainer component={Paper} elevation={16} sx={{
              width: '70%',
              marginLeft: 'auto',
              marginRight: 'auto',
              backgroundColor: 'rgba(30, 44, 61, 0.9)',
              }}>
            <Table aria-label="simple table">
              <TableHead >
                <TableRow sx={{borderBottom: '2px solid rgba(23, 33, 46, 0.9)'}}>
                  <TableCell sx={muiColor}>Image</TableCell>
                  <TableCell sx={muiColor}>Name</TableCell>
                  <TableCell sx={muiColor}align="left">Total Rating</TableCell>
                  <TableCell sx={muiColor}align="right">Amount of Votes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rendered.map((rendered, index) => (
                  <TableRow
                    key={`gun.name${index}`}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: '2px solid rgba(23, 33, 46, 0.9)'}}
                  >
                    <TableCell component="th" scope="row" sx={muiColor}>
                      <img src={rendered.picture} alt="broken thumbnail" style={{width: '400px', height: 'auto', maxHeight: '180px'}}/>
                    </TableCell>
                    <TableCell align="left" sx={muiColor}>{rendered.gun_name}</TableCell>
                    <TableCell align="center" sx={muiColor}>{rendered.total_rating}</TableCell>
                    <TableCell align="center" sx={muiColor}>{rendered.count}</TableCell>
                  </TableRow>
                ))}
                </TableBody>
              </Table>
            </TableContainer>
        </div>
        <div className="right-filter-buttons-rankings">
            <RightRankButtons filterGuns={filterGuns}/>
        </div>
      </div>
    );
  }
}