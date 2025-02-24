import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

import BooksCard from '../components/home/BooksCard';
import BooksTable from '../components/home/BooksTable';

const Home = () => {

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('card');

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:5555/books').then((response) => {
            setBooks(response.data.data);
            setLoading(false);
        })
            .catch((error) => {
                console.log(error);
                setLoading(false)
            })
    }, []);

    return (
        <div className='p-4'>

            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-600  px-8 py-2 rounded-lg hover:scale-110 duration-300 ease-in' onClick={() => setShowType('table')}>Table</button>
                <button className='bg-sky-600  px-8 py-2 rounded-lg hover:scale-110 duration-300 ease-in' onClick={() => setShowType('card')}>Card</button>
            </div>

            <div className="flex justify-between items-center">
                <h1 className='text-3xl my-8'>Books List</h1>
                <Link to='/books/create'>
                    <MdOutlineAddBox className='text-white-800 text-5xl' title='create' />
                </Link>
            </div>
            {loading ? <Spinner /> : showType === 'table' ? (<BooksTable books={books} />) : (<BooksCard books={books} />)}

        </div>
    )
}

export default Home
