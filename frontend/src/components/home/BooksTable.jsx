import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai'
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const BooksTable = ({ books }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-white-600 p-3 rounded-md'>No</th>
                    <th className='border border-white-600 p-3 rounded-md'>Title</th>
                    <th className='border border-white-600 p-3 rounded-md max-md:hidden'>Author</th>
                    <th className='border border-white-600 p-3 rounded-md max-md:hidden'>Publish Year</th>
                    <th className='border border-white-600 p-3 rounded-md max-md:hidden'>Operations</th>
                </tr>
            </thead>

            <tbody>
                {
                    books.map((book, index) => {
                        return (
                            <tr key={book.id} className='h-8'>
                                <td className='border border-white-700 p-3 rounded-md text-center'>{index + 1}</td>
                                <td className='border border-white-700 p-3 rounded-md text-center'>{book.title}</td>
                                <td className='border border-white-700 p-3 rounded-md text-center max-md:hidden'>{book.author}</td>
                                <td className='border border-white-700 p-3 rounded-md text-center'>{book.publishYear}</td>

                                <td className='border border-white-700 p-3 rounded-md text-center'>
                                    <div className="flex justify-center gap-x-4">
                                        <Link to={`/books/details/${book._id}`}>
                                            <BsInfoCircle className='text-4xl bg-slate-200 p-2 rounded-full text-green-800' title='show'/>
                                        </Link>

                                        <Link to={`/books/edit/${book._id}`}>
                                            <AiOutlineEdit className='text-4xl bg-slate-200 p-2 rounded-full text-yellow-600' title='edit' />
                                        </Link>

                                        <Link to={`/books/delete/${book._id}`}>
                                            <MdOutlineDelete className='text-4xl bg-slate-200 p-2 rounded-full text-red-600' title='delete' />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default BooksTable
