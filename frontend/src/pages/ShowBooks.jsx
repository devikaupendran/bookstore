import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowBooks = () => {

    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/books/${id}`).then((response) => {
            setBook(response.data);
            setLoading(false)
        })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, [])

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-5xl font-semibold my-10 text-center'>About Book</h1>

            <div className='flex flex-col justify-center items-center'>

                {
                    loading ?
                        (
                            <Spinner />
                        )
                        :
                        (
                            <div className='flex flex-col  border-2 border-sky-400 rounded-xl w-fit p-10'>

                                <div className='my-4'>
                                    <span className='text-2xl mr-4 text-gray-300'>Id : </span>
                                    <span className='text-2xl'>{book._id}</span>
                                </div>

                                <div className='my-4'>
                                    <span className='text-2xl mr-4 text-gray-300'>Title : </span>
                                    <span className='text-2xl'>{book.title}</span>
                                </div>

                                <div className='my-4'>
                                    <span className='text-2xl mr-4 text-gray-300'>Author : </span>
                                    <span className='text-2xl'>{book.author}</span>
                                </div>

                                <div className='my-4'>
                                    <span className='text-2xl mr-4 text-gray-300'>Published Year : </span>
                                    <span className='text-2xl'>{book.publishYear}</span>
                                </div>

                                <div className='my-4'>
                                    <span className='text-2xl mr-4 text-gray-300'>Created Time : </span>
                                    <span className='text-2xl'>{new Date(book.createdAt).toString()}</span>
                                </div>

                                <div className='my-4'>
                                    <span className='text-2xl mr-4 text-gray-300'>Updated Time : </span>
                                    <span className='text-2xl'>{new Date(book.updatedAt).toString()}</span>
                                </div>
                            </div>
                        )
                }
            </div>
        </div>
    )
}

export default ShowBooks
