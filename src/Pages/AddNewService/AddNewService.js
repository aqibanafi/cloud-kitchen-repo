import React from 'react';

const AddNewService = () => {

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
            price: price
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
                    alert("Service Added!")
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div className='container mx-auto'>
            <form onSubmit={handleAddNewService}>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="Title"
                        className="inline-block mb-1 font-medium"
                    >
                        Title
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
                        Image
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
                        Description
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
                        Price
                    </label>
                    <input
                        placeholder="input price of your service"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        name="price"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                        htmlFor="email"
                        className="inline-block mb-1 font-medium"
                    >
                        Rating
                    </label>
                    <input
                        placeholder="input price of your service"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        name="rating"
                    />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-orange-700 focus:shadow-outline focus:outline-none"
                    >
                        Add New Service
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewService;