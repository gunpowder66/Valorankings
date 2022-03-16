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

const muiColor = {color: 'aliceblue'}

export default function Rankpage () {
  const [guns, setGuns] = useState([]);


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
        setGuns(finArr);
      }))
      .catch((err) => console.log(err))
  },[])


  if (guns.length === 0) {
    return <div>Loading...</div>
  } else {
    return (
      <div className='ranking-page'>
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
                <TableCell sx={muiColor} align="right">Total Rating</TableCell>
                <TableCell sx={muiColor}align="right">Amount of Votes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {guns.map((gun, index) => (
                <TableRow
                  key={`gun.name${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 }, borderBottom: '2px solid rgba(23, 33, 46, 0.9)'}}
                >
                  <TableCell component="th" scope="row" sx={muiColor}>
                    <img src={gun.picture} alt="broken thumbnail" style={{width: '400px', height: 'auto', maxHeight: '180px'}}/>
                  </TableCell>
                  <TableCell align="left" sx={muiColor}>{gun.gun_name}</TableCell>
                  <TableCell align="right" sx={muiColor}>{gun.total_rating}</TableCell>
                  <TableCell align="right" sx={muiColor}>{gun.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}