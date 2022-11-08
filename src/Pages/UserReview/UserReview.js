import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserReviewCard from './UserReviewCard';

const UserReview = () => {

    //Load Data By Loader
    const allReviews = useLoaderData()

    //Set Revier State
    const [review, setReview] = useState([])
    console.log(allReviews)

    //Load Query Data 
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceid=${allReviews._id}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className='text-4xl font-bold text-center'>User Reviews</h1>
            </div>
            <div>
               {
                review.map(reviews => <UserReviewCard key={reviews._id} reviews={reviews}></UserReviewCard>)
               }
            </div>
        </div>
    );
};

export default UserReview;