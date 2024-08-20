import { Book } from '../models/Book.model.js';

// Get all books
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    console.error("Error fetching books:", err);
    res.status(500).json({ message: 'Error fetching books', error: err.message });
  }
};

export const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    console.log(newBook)
    const result = await newBook.save();
    res.status(201).send(result);
  } catch (err) {
    console.error("Error in createBook:", err);
    res.status(500).send({ message: 'Error creating book', error: err });
  }
};



export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
  } catch (err) {
    console.error("Error fetching book:", err);
    res.status(500).json({ message: 'Error fetching book', error: err.message });
  }
};

// Update a book by ID
export const updateBookById = async (req, res) => {
  try {
    const result = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!result) return res.status(404).send({ message: 'Book not found' });
    res.send(result);
  } catch (err) {
    res.status(500).send({ message: 'Error updating book', error: err });
  }
};

// Delete a book by ID
export const deleteBookById = async (req, res) => {
  try {
    const result = await Book.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send({ message: 'Book not found' });
    res.send({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error deleting book', error: err });
  }
};
