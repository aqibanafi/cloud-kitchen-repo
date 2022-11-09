import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaStar } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns'
import useTitle from '../../hooks/useTitle';

const UpdateReview = () => {

    //Set Page Title
    useTitle("Update Review")
    
    //Load Data By Use Loader
    const reviews = useLoaderData();

    //Disstructure Data 
    const { date } = reviews

    //Declear State
    const [review, setReview] = useState(reviews)

    //Review Count State
    const [reviewStar, setReviewStar] = useState(0)

    //States For Setting Review Star Color
    const [starOneStarColor, setStarOneStarColor] = useState("text-gay-500")
    const [starTwoStarColor, setStarTwoStarColor] = useState("text-gay-500")
    const [starThreeStarColor, setStarThreeStarColor] = useState("text-gay-500")
    const [starFourStarColor, setStarFourStarColor] = useState("text-gay-500")
    const [starFiverStarColor, setStarFiverStarColor] = useState("text-gay-500")

    //Review Star Disable
    const [count, setCount] = useState(0)

    //Date Function
    const reviewTime = formatDistanceToNow(
        new Date(date),
        { includeSeconds: true }
    )

    //All Functions To Get Value For Posting Review
    const handleGetReviewOne = () => {
        const starValue = [1]
        setReviewStar(...starValue)
        setCount(1)

    }
    const handleGetReviewTwo = () => {
        const starValue = [2]
        setReviewStar(...starValue)
        setCount(2)
    }
    const handleGetReviewThree = () => {
        const starValue = [3]
        setReviewStar(...starValue)
        setCount(3)

    }
    const handleGetReviewFour = () => {
        const starValue = [4]
        setReviewStar(...starValue)
        setCount(4)

    }
    const handleGetReviewFive = () => {
        const starValue = [5]
        setReviewStar(...starValue)
        setCount(5)

    }

    //Handle Update Review
    const handleUpdateReview = event => {
        event.preventDefault()
        const form = event.target;
        fetch(`http://localhost:5000/myreviews/${reviews._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Your Review is Updated")
                    form.reset();
                }
            })
    }


    //Input Change
    const handleMessageChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        let newReview = { ...review }
        newReview = {
            [field]: value,
            ratingComment: `${reviewStar === 1 ? "Poor" : reviewStar === 2 ? "Below Average" : reviewStar === 3 ? "Average" : reviewStar === 4 ? "Good" : reviewStar === 5 ? "Excellent" : ""}`,
            rating: reviewStar
        }

        setReview(newReview)
    }
    return (
        <div className='mt-20 mb-20'>
            <h1 className='text-center text-5xl font-bold text-orange-500 mb-12'>Update Review Here</h1>
            <div className="container border shadow-xl flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-orange-500 dark:text-black">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={reviews.image} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{reviews.name}</h4>
                            <span className="text-xs dark:text-gray-400">{reviewTime}</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 dark:text-yellow-500">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                            <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                        </svg>
                        <span className="text-xl font-bold">{reviews.rating}</span>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center p-5 gap-2'>
                    <div className="flex space-x-3">
                        <button onClick={() => handleGetReviewOne(`${setStarOneStarColor("text-yellow-500")}`)} className={`${starOneStarColor}`} disabled={count !== 0} type="button" name="one" title="Rate 1 stars" aria-label="Rate 1 stars">
                            <FaStar className='text-4xl'></FaStar>
                        </button>
                        <button onClick={() => handleGetReviewTwo(`${setStarTwoStarColor("text-yellow-500")}`)} className={`${starTwoStarColor}`} disabled={count !== 1} type="button" title="Rate 2 stars" name="2" aria-label="Rate 2 stars">
                            <FaStar className='text-4xl'></FaStar>
                        </button>
                        <button onClick={() => handleGetReviewThree(`${setStarThreeStarColor("text-yellow-500")}`)} className={`${starThreeStarColor}`} disabled={count !== 2} type="button" title="Rate 3 stars" name="3" aria-label="Rate 3 stars">
                            <FaStar className='text-4xl'></FaStar>
                        </button>
                        <button onClick={() => handleGetReviewFour(`${setStarFourStarColor("text-yellow-500")}`)} className={`${starFourStarColor}`} disabled={count !== 3} type="button" title="Rate 4 stars" name="four" aria-label="Rate 4 stars">
                            <FaStar className='text-4xl'></FaStar>
                        </button>
                        <button onClick={() => handleGetReviewFive(`${setStarFiverStarColor("text-yellow-500")}`)} className={`${starFiverStarColor}`} disabled={count !== 4} type="button" title="Rate 5 stars" name="five" aria-label="Rate 5 stars">
                            <FaStar className='text-4xl'></FaStar>
                        </button>
                    </div>
                    <div>
                        <p className='text-xl font-bold text-orange-500'>
                            {
                                reviewStar === 1 ? "Poor" : reviewStar === 2 ? "Below Average" : reviewStar === 3 ? "Average" : reviewStar === 4 ? "Good" : reviewStar === 5 ? "Excellent" : ""
                            }
                        </p>
                    </div>
                </div>
                <form onSubmit={handleUpdateReview}>
                    <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                        <textarea onChange={handleMessageChange} rows="3" defaultValue={reviews.message} name="message" placeholder="Message..." className="p-4 rounded-md resize-none dark:text-gray-700 bg-orange-100 w-full"></textarea>
                    </div>
                    <div className='flex justify-center'>
                        <div>
                            <button type='submit' className="btn border-0 bg-orange-500 text-white px-12 font-bold">Edit Review</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default UpdateReview;