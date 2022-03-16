const axios = require('axios');
const db = require('../database/index.js');

const populateTables = () => {
  axios.get('https://valorant-api.com/v1/weapons')
  .then((data) => {
    for (let i = 0; i < data.data.data.length; i++) {
      data.data.data[i].skins.map((gun) => {
        db.query(`INSERT INTO ranks (type_id, gun_name) VALUES ((SELECT id FROM type WHERE name=$1), $2)`, [data.data.data[i].displayName, gun.displayName])
          .then(() => console.log('inserted'))
      })
    }
  })
}

populateTables();