require('dotenv').config();
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());

app.set('port', process.env.PORT || 3000);
app.locals.pets = [];
app.locals.pets = [
  { id: 'a1', name: 'Rover', type: 'dog' },
  { id: 'b2', name: 'Daisy', type: 'dog' },
  { id: 'c3', name: 'Jasper', type: 'cat' }
];

app.get('/', (req, res) => {
  res.send(process.env.SUPER_SECRET_VAR)
})

app.get('/api/v1/pets', (req, res) => {
  const pets = app.locals.pets

  return res.json({ pets })
})

app.listen(app.get("port"), () => {
  console.log(`Listening on port ${app.get('port')}`)
})