import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose'
import { Book } from './models/bookModel.js';

const app = express();

app.use(express.json()) //middleware to parse request body

app.get('/', (req, res) => {
    // console.log(req)
    return res.status(234).send('Welcome to bookstore mern tutorial')
})

mongoose.connect(mongoDBURL).then(() => {
    console.log('connected to mongodb')
}).catch((error) => {
    console.log(error)
})

//Route for save a new book
app.post('/books', async (req, res) => {
    try {
        //validation  checking the data
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'Send all the required fields: title, author, publishYear' })
        }
        //creating variable for new book and storing the data
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }

        //create a variable and send this new book to it and save the result to book variable
        const book = await Book.create(newBook)

        //return the response and book to the client
        return res.status(201).send(book)
    }

    catch (error) {
        console.log(error)
        res.status(500).send({ message: error.message })
    }
})

//create a new route for get all books from database
app.get('/books', async (req, res) => {
    try {
        const books = await Book.find({}) //get all datas from database
        return res.status(200).json(
            {
                count: books.length,
                data: books
            }
        ); //send to clients

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

//create a new route for get One book from Database
app.get('/books/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const book = await Book.findById(id)  //get the book from database based on id
        return res.status(200).json(book); //send to clients

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
})

//Route for update a book
app.put('/books/:id', async (req, res) => {
    try {
        //check if these necessary fields are present in req.body
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({ message: 'Send all the required fields: title, author, publishYear' })
        }

        const { id } = req.params; //then we can select the id from request
        const result = await Book.findByIdAndUpdate(id, req.body)

        //checking is there any book
        if (!result) {
            return res.status(404).json({ message: 'Book not found' })
        }

        //if we get the book
        return res.status(200).send({ message: "book updated successfully" })

    }
    catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
})

//Route for delete a data from db
app.delete('/books/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Book.findByIdAndDelete(id)

        if (!result) {
            return res.status(404).json({ message: 'Book not Found' })
        }

        return res.status(200).send({ message: 'Book deleted successfully' })
    }
    catch (error) {
        console.log(error.message)
        return res.status(500).send({ message: error.message })
    }
})

//create and run server
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT} !!`)
})