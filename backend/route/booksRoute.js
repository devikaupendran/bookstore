import express from 'express'
import { saveNewBook, getAllBooks, getOneBook, updateBook, deleteBook } from '../controllers/bookController.js';

// creating a router 
const booksRouter = express.Router();

booksRouter.post('/', saveNewBook); //Route for save a new book
booksRouter.get('/', getAllBooks); // Route for get all books from database
booksRouter.get('/:id', getOneBook); //Route for get One book from Database
booksRouter.put('/:id', updateBook); //Route for update a book
booksRouter.delete('/:id', deleteBook); //Route for delete a data from db

export default booksRouter