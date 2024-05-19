import mongoose from "mongoose";

// Book schema and model
const bookSchema = new mongoose.Schema({
    title: String,
    descrip: String,
    price: String,
    author: String
});
//created a modal
export const Book = mongoose.model('Book', bookSchema);
