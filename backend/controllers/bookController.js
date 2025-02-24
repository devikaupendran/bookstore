import { Book } from '../models/bookModel.js';

//Function for save a new book
export const saveNewBook = async (req, res) => {
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
}

//Function for get all books from database
export const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({}) //get all datas from database
        return res.status(200).json( //send to clients
            {
                count: books.length,
                data: books
            }
        );

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
}

//Function for get One book from Database
export const getOneBook = async (req, res) => {
    try {

        const { id } = req.params;
        const book = await Book.findById(id)  //get the book from database based on id
        return res.status(200).json(book); //send to clients

    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
}


//Function for update a book
export const updateBook = async (req, res) => {
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
}

//Function for delete a data from db
export const deleteBook = async (req, res) => {
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
}