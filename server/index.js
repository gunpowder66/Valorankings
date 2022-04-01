const express = require('express');
const morgan = require('morgan');
const db = require('../database/index.js');
const cors = require('cors')
const PORT = 3001

const app = express();

app.use(cors());
app.use(morgan('tiny'));
app.use(express.json());


app.put('/', (req, res) => {
  const {
    name,
    total_rating
  } = req.body

  db.query('UPDATE ranks SET total_rating=total_rating + $1, count=count + 1 WHERE gun_name=$2', [total_rating, name])
    .then(() => res.status(200).send('Updated'))
    .catch((err) => res.status(400).send(err))
})

app.get('/rankings', (req, res) => {
  db.query('SELECT ranks.id, ranks.gun_name, ranks.total_rating, ranks.count, type.name FROM ranks, type WHERE type.id=ranks.type_id ORDER BY total_rating DESC')
    .then((data) => res.status(200).send(data.rows))
    .catch((err) => res.status(400).send(err))
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
