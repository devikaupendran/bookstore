import React from 'react'
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = '/' }) => {
    return (
        <div className='flex'>
            <Link to={destination} className='bg-sky-500 text-white px-9 py-3 rounded-lg w-fit'>
                <BsArrowLeft className='text-3xl font-semibold' />
            </Link>
        </div>
    )
}

export default BackButton
