import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import UserReviewCard from './UserReviewCard';

const UserReview = () => {

    //Load Data By Loader
    const allReviews = useLoaderData()

    //Set Revier State
    const [review, setReview] = useState([])
    //Load Query Data 
    useEffect(() => {
        fetch(`http://localhost:5000/reviews?serviceid=${allReviews._id}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [review])
    return (
        <div className='mt-20 mb-20'>
            <div>
                {
                    review.length === 0 ?
                        <h1 className='text-center text-5xl font-bold text-orange-500 mb-12'>No Feedback Were Given Into This Service</h1>
                        :
                        <h1 className='text-center text-5xl font-bold text-orange-500 mb-12'>User Reviews</h1>
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    review.map(reviews => <UserReviewCard key={reviews._id} reviews={reviews}></UserReviewCard>)
                }
            </div>
        </div>
    );
};

export default UserReview;