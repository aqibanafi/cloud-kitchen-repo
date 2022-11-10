import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Dashboard = () => {

    //Load User Data By Auth Provider
    const { user, logOut } = useContext(AuthContext);


    //Set Review State
    const [review, setReview] = useState([])

    //Load Data By Use Effects
    useEffect(() => {
        fetch(`https://assignment-11-superkitch-server-side.vercel.app/myreviews?email=${user?.email}`, {
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
    }, [user?.email, logOut])

    return (
        <div className='flex flex-col justify-center items-center mt-40 mb-40'>
            <h1 className='text-center text-5xl font-bold text-orange-500 mb-12'>Your Profile</h1>
            <div className="w-3/6 flex flex-wrap gap-10 justify-center items-center p-20 sm:flex sm:space-x-6 text-black border shadow-xl" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="flex w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src={user?.photoURL} alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-3xl font-bold text-orange-500">{user?.displayName}</h2>
                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-400">{user?.email}</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                                <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                            </svg>
                            <span className="dark:text-gray-400">{user?.phoneNumber ? user?.phoneNumber : "Phone number not found"}</span>
                        </span>
                    </div>
                    <div>
                        <p className='text-lg font-bold'>You have posted total <span className='text-orange-500 mr-2 ml-2 text-2xl font-extrabold'>{review.length}</span> reviews</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;