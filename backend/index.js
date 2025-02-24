import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose'
import booksRouter from './route/booksRoute.js';
import cors from 'cors'

const app = express();

app.use(express.json()) //middleware to parse request body

app.use(cors());

// app.use(cors(
//     {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type'],
//     }
// ));

app.get('/', (req, res) => {
    // console.log(req)
    return res.status(234).send('Welcome to bookstore mern tutorial')
})

app.use('/books', booksRouter);

mongoose.connect(mongoDBURL).then(() => {
    console.log('connected to mongodb')
}).catch((error) => {
    console.log(error)
})

//create and run server
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT} !!`)
})