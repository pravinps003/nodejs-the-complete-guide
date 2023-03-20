const path = require('path');

const express = require('express');

const router = express.Router();

// Route: /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// Route: /admin/product => POST
router.post('/add-product', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
