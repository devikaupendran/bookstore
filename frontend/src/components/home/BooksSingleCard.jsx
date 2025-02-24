import React, { useState } from 'react'
import { PiBookOpenTextLight } from 'react-icons/pi'
import { AiOutlineEdit } from 'react-icons/ai'
import { BiUserCircle, BiShow } from 'react-icons/bi'
import { BsInfoCircle } from 'react-icons/bs'
// import { MdOutlineDelete } from 'react-icons/md' 
import { Link } from 'react-router-dom'
import BookModal from './BookModal'

const BooksSingleCard = ({ book }) => {
    const [showModal, setShowModal] = useState(false);

    return (

        <div key={book._id} className='border-2 border-gray-100 rounded-lg px-4 py-2 m-4 relative shadow-[0px_0px_0px_1px_rgba(3,100,214,.3)] hover:shadow-xl hover:scale-101 cursor-pointer'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-blue-500 rounded-lg text-white'>{book.publishYear}</h2>
            
            <div className='flex justify-start items-center gap-x-2 py-10 p-8 border-b border-b-gray-200'>
                <PiBookOpenTextLight className='text-blue-300 text-5xl' />
                <h1 className='my-1 text-white font-semibold text-2xl'>{book.title}</h1>
            </div>

            <div className='flex justify-start items-center gap-x-2 p-4'>
                <BiUserCircle className='text-gray-500 text-3xl' />
                <h2 className='my-1 text-2xl'>{book.author}</h2>
            </div>

            <h4 className='my-2 text-red-400  p-3'> <span className='text-white'>ID : </span> {book._id}</h4>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>

                <BiShow className='text-5xl text-blue-600 hover:scale-120 duration-300 ease-in cursor-pointer bg-white rounded-full p-2' onClick={() => setShowModal(true)} />

                <Link to={`/books/details/${book._id}`}>
                    <BsInfoCircle className='text-5xl text-green-500 hover:scale-120 duration-300 ease-in cursor-pointer bg-white rounded-full p-2' />
                </Link>

                <Link to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit className='text-5xl text-yellow-500 hover:scale-120 duration-300 ease-in cursor-pointer bg-white rounded-full p-2' />
                </Link>

                {
                    showModal && (<BookModal book={book} onClose={() => setShowModal(false)} />)
                }
            </div>

        </div>
    )
}

export default BooksSingleCard
