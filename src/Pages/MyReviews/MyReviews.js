import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';
import Swal from 'sweetalert2'

const MyReviews = () => {

    //Load User Data By Auth Context
    const { user, logOut } = useContext(AuthContext)

    //Set Review State
    const [review, setReview] = useState([])

    //Load Data By Use Effects
    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('superkitch')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    logOut()
                }
                return res.json()
            })
            .then(data => setReview(data))
    }, [user?.email])


    //Sweet Alert For Delete Review 
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    //Handle Delete Review
    const handleDelete = id => {
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(result)
                fetch(`http://localhost:5000/reviews/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = review.filter(singleReview => singleReview._id !== id)
                            setReview(remaining)
                        }
                    })
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    return (
        <div className='mt-20 mb-20'>
            <div>
                {
                    review.length === 0 && <h1 className='text-center text-5xl font-bold text-orange-500 mb-12'>No Reviews Were Founded</h1>
                }
            </div>
            <div>
                {
                    review.length === 0 || <h1 className='text-center text-5xl font-bold text-orange-500 mb-20'>Your Reviews</h1>
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    review.map(reviews => <MyReviewsCard key={reviews._id} reviews={reviews} handleDelete={handleDelete}></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;

