const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const massive = require('massive');
const controller = require('.//controller');

const app = express();

app.use(bodyParser.json())

const port = process.env.SERVER_PORT || 3333;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err))

app.listen(port, () => {
    console.log(`Party happenin' on port ${port}!`)
})