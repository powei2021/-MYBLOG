const express = require('express')
const router = express.Router();
const newsController = require('../controller/news.controller');
const checkNumber = require('../middleware/news.middleware');

router.get('/create', checkNumber, newsController.create)

// router.get('/', (req, res) => {
//     res.send('Hello Skillup')
//   })

  module.exports = router;