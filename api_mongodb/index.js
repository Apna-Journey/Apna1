import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { Book } from "./modals/Book.modal.js";
dotenv.config();

const app = express();
app.use(express.json());

// Middleware
// console.log("Frontend URL:", process.env.FRONTEND_URL);
const corsOpts = {
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));

// Mongoose connection
mongoose.connect(process.env.DBURL)
    .then(() => console.log("Database Connected!"))
    .catch(err => console.error("Database connection error: ", err));


// Routes
app.get('/book', async (req, resp) => {
  try {
    const books = await Book.find();
    resp.send(books);
  } catch (err) {
    resp.status(500).send(err);
  }
});

app.post("/insert", async (req, resp) => {
  try {
    const newBook = new Book(req.body);
    const result = await newBook.save();
    resp.send(result);
  } catch (err) {
    resp.status(500).send(err);
  }
});

app.delete("/delete/:id", async (req, resp) => {
  try {
    const result = await Book.deleteOne({_id:req.params.id});
    if (!result) {
      return resp.status(404).send({ message: 'Book not found' });
    }
    resp.send(result);
  } catch (err) {
    resp.status(500).send({ message: 'Error deleting book', error: err });
  }
});

app.get("/update/:id", async (req, resp) => {
  try {
    const book = await Book.findById(req.params.id);
    resp.send(book);
  } catch (err) {
    resp.status(500).send(err);
  }
});

app.put("/update/:id", async (req, resp) => {
  try {
    const result = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    resp.send(result);
  } catch (err) {
    resp.status(500).send(err);
  }
});

const port = process.env.PORT || 8800;
app.listen(port, () => {
  console.log("Server Started on " + port);
});
