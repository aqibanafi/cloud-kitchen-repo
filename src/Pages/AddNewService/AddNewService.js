import React from 'react';
import Lottie from "lottie-react";
import Addservice from '../../assets/lottie/add-new-service.json';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';
import { useNavigate } from 'react-router-dom';

const AddNewService = () => {

    //Set Page Title
    useTitle("Add New Service")

    //Navigate
    const navigate = useNavigate();

    //Add New Service Button 
    const handleAddNewService = event => {
        event.preventDefault()
        const form = event.target;
        const description = form.description.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const title = form.title.value;

        //Create Object To Insert Data
        const service = {
            title: title,
            image: image,
            description: description,
            rating: rating,
            price: price,
            date: new Date()
        }

        fetch('https://assignment-11-superkitch-server-side.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("You Have Successfully Added a Service")
                    form.reset()
                    navigate('/');
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-center text-5xl font-bold text-orange-500 mb-20 mt-10'>Add New Service</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-32'>
                    <div className='w-full'>
                        <form onSubmit={handleAddNewService}>
                            <div className='grid grid-cols-1 gap-5'>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="Title"
                                            className="inline-block mb-2 font-medium"
                                        >
                                            Service Title
                                        </label>
                                        <input
                                            placeholder="Title..."
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            name="title"
                                        />
                                    </div>
                                    <div className="mb-1 w-full">
                                        <label
                                            htmlFor="lastName"
                                            className="inline-block mb-2 font-medium"
                                        >
                                            Service Image URL
                                        </label>
                                        <input
                                            placeholder="URL..."
                                            required
                                            type="text"
                                            className="w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            name="image"
                                        />
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-2 font-medium"
                                        >
                                            Service Price
                                        </label>
                                        <input
                                            placeholder="Price..."
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            name="price"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-2 font-medium"
                                        >
                                            Service Rating
                                        </label>
                                        <input
                                            placeholder="Rating..."
                                            required
                                            type="text"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                            name="rating"
                                        />
                                    </div>
                                </div>


                                <div className="mb-1 w-full">
                                    <label
                                        htmlFor="email"
                                        className="inline-block mb-2 font-medium"
                                    >
                                        Service Description
                                    </label>
                                    <textarea
                                        cols="20" rows="10"
                                        placeholder="Description..."
                                        required
                                        type="text"
                                        className="w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="description">
                                    </textarea>
                                </div>
                            </div>
                            <div className="mt-10 mb-2 sm:mb-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-500 focus:shadow-outline focus:outline-none"
                                >
                                    Add New Service
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className='w-5/6'>
                        <Lottie animationData={Addservice} loop={true}></Lottie>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AddNewService;