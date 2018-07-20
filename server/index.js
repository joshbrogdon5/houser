const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const cors = require('cors')
const controller = require('.//controller');

const app = express();

app.use(cors());

app.use(bodyParser.json())

const port = process.env.SERVER_PORT || 3333;

app.get('/api/houses', controller.getAll);
app.post('/api/house', controller.create)
app.delete('/api/house/:id', controller.delete)

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Party happenin' on port ${port}!`)
})