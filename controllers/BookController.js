const Book = require(`../models/book`)

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({
      success: true,
      data: books
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching books',
      error: error.message
    });
  }
};
const getBookByID = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    res.status(200).json({
      success: true,
      data: book
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching book by ID',
      error: error.message
    });
  }
};
const AddBook = async (req, res) => {
  try {
    const newBookFromData = req.body;


    const newlyCreatedBook = await Book.create(newBookFromData);

    if (newlyCreatedBook) {
      return res.status(201).json({
        success: true, 
        message: 'Book added successfully',
        data: newlyCreatedBook,
      });
    }

  } catch (e) {
    console.error(e);
    res.status(500).json({
      success: false,
      message: 'Error adding book',
      error: e.message,
    });
  }
};


const UpdateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: updatedBook
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating book',
      error: error.message
    });
  }
};
const DeleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    if (!deletedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Book deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting book',
      error: error.message
    });
  }
};
module.exports = {
    getAllBooks, getBookByID, AddBook, UpdateBook, DeleteBook
}