const express = require('express');
const router = express.Router();

router.post('/teacher', (req, res) => {
  console.log('new teacher route working!');
  res.status(200).send('new teacher route is working!');
});


module.exports = router;