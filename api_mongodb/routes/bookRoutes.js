import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js'; 
import {
  getBooks,
  createBook,
  getBookById,
  updateBookById,
  deleteBookById
} from '../controllers/bookController.js';

const router = express.Router();

router.post('/', authMiddleware, createBook);

// Get all books
router.get('/', getBooks);

// Create a new book
router.post('/', createBook);

// Get a single book by ID
router.get('/:id', getBookById);

// Update a book by ID
router.put('/:id', updateBookById);

// Delete a book by ID
router.delete('/:id', deleteBookById);

export default router;
