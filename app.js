//require packages: declaring all what u need to require before the const app
const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const {PORT, BASE_URL} = process.env
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

//start server
app.listen(PORT || 3000, () => {
  console.log('The server is running at port localhost:3000')
})