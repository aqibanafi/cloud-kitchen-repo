import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {

    //Load User Data By Auth Context
    const {user} = useContext(AuthContext)
    
    //Set Review State
    const [review, setReview] = useState([])

    //Load Data By Use Effects
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setReview(data))
    }, [user?.email])

    //Handle Delete Review
    const handleDelete = id => {
        const process = window.confirm("Want to delete?")
        if(process) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0) {
                    alert("Deleted!")
                    const remaining = review.filter(singleReview => singleReview._id !== id)
                    setReview(remaining)
                }
            })
        }
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            {
                review.map(reviews => <MyReviewsCard key={reviews._id} reviews={reviews} handleDelete={handleDelete}></MyReviewsCard>)
            }
        </div>
    );
};

export default MyReviews;