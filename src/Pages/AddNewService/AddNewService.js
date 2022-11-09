import React from 'react';
import Lottie from "lottie-react";
import Addservice from '../../assets/lottie/add-new-service.json';
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddNewService = () => {

    //Set Page Title
    useTitle("Add New Service")
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

        fetch('http://localhost:5000/services', {
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
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-center text-5xl font-bold text-orange-500 mb-12 mt-10'>Add New Service</h1>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-32'>
                    <div className='w-full'>
                        <form onSubmit={handleAddNewService}>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="Title"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Service Title
                                    </label>
                                    <input
                                        placeholder="title of your service"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="title"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="lastName"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Service Image URL
                                    </label>
                                    <input
                                        placeholder="provide image url"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="image"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="email"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Service Description
                                    </label>
                                    <input
                                        placeholder="type detail of your service"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="description"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="email"
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Service Price
                                    </label>
                                    <input
                                        placeholder="input price of your service"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        name="price"
                                    />
                                </div>
                            </div>
                            <div className="mt-4 mb-2 sm:mb-4">
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