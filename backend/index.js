import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose'
import { Book } from './models/bookModel.js';

const app = express();
 
app.use(express.json()) //middleware to parse request body

app.get('/', (req, res) => {
    console.log(req)
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
        //.validation  checking the data
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
        res.status(500).send({ message: error.message })
    }
})

//create and run server
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT} !!`)
})