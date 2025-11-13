const express = require('express');
const {getAllBooks, getBookByID, AddBook, UpdateBook, DeleteBook} = require('../controllers/BookController');
const router =express.Router()

router.get('/get',getAllBooks);
router.get('/get/:id',getBookByID);
router.post('/add',AddBook);
router.put('/update/:id',UpdateBook);
router.delete('/delete/:id', DeleteBook);

module.exports = router;