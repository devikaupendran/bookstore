import express from 'express'
import { PORT, mongoDBURL } from './config.js'
import mongoose from 'mongoose'

const app = express();

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send('Welcome to bookstore mern tutorial')
})

mongoose.connect(mongoDBURL).then(() => {
    console.log('connected to mongodb')
}).catch((error) => {
    console.log(error)
})

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT} !!`)
})