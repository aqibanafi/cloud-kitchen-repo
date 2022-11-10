import React from 'react';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns'

const MyReviewsCard = ({ reviews, handleDelete }) => {
    //Destructure Properticies
    const { _id, name, image, message, rating, ratingComment, date, title } = reviews;

    //Date Function
    const reviewTime = formatDistanceToNow(
        new Date(date),
        { includeSeconds: true }
    )

    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-orange-500 dark:text-black border shadow-xl">
                <div className="flex items-center justify-between p-4">
                    <div className="flex flex-col">
                        <div>
                            <img src={image} alt="" className="object-cover w-12 h-12 mb-3 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{name}</h4>
                            <span className="text-xs dark:text-gray-400">{reviewTime}</span>
                        </div>
                        <div>
                            <small><p className='font-semibold'>Service Title: <span className='text-orange-500 font-bold'>{title}</span></p></small>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-x-2 dark:text-yellow-500">
                        <div className="flex flex-col items-center">
                            <div className='flex items-center gap-3'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">{rating}</span>
                            </div>
                            <div>
                                <p className='text-orange-500 font-bold'>{ratingComment}</p>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="p-4 space-y-2 text-sm font-bold text-gray-600">
                    <p>{message}</p>
                </div>
                <div className='flex justify-evenly'>
                    <div className='mt-5'>
                        <Link to={`/updatereview/${_id}`}>
                            <button className="btn bg-orange-500 border-0 text-white font-bold px-10 hover:bg-orange-700">Edit review</button>
                        </Link>
                    </div>
                    <div className='mt-5'>
                        <button onClick={() => handleDelete(_id)} className="btn border-0 bg-red-600 text-white font-bold px-10 hover:bg-red-800">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;