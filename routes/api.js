const express = require('express');
const router = express.Router();

router.post('/api', (req, res) => {
  res.json({test: 'test json data'});
})

module.exports = router;