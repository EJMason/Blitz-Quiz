const express = require('express');
const router = express.Router();

router.post('/student', (req, res) => {
  console.log('new student route working!');
  res.status(200).send('new student route is working!');
});


module.exports = router;