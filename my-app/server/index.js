const express = require('express');
const PORT = 3001

const app = express();

app.get('/', (req, res) => {
  res.status(200).send({
    "hello": "hey"
  });
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
