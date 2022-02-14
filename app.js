//require packages: declaring all what u need to require before the const app
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const mongo = require('./config/mongo.config')
const {PORT, BASE_URL, DB_URL} = process.env

// console.log(process.env)
//initializing packages
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//routes
app.use('/api', require('./routes/home.routes'))
//starting your routes inside ur app,  
 /*app.get('/', (req, res) => {
   res.send('Hello World')
 })*/

//start server, we connecting our mongo
app.listen( process.env.PORT || 3000, async () => {
  await mongo(DB_URL)
  console.log(`the server is running on Port ${BASE_URL}${PORT}`);
});