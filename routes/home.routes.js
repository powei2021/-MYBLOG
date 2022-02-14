const express = require('express')
const router = express.Router();
const newsController = require('../controller/news.controller');
const checkNumber = require('../middleware/news.middleware');

router.post('/create', checkNumber, newsController.create)
router.put("/update/:postId", newsController.update);
router.get("/all", newsController.getAll);
router.delete("/delete/:postId", newsController.delete)
// router.get('/', (req, res) => {
//     res.send('Hello Skillup')
//   })

  module.exports = router;