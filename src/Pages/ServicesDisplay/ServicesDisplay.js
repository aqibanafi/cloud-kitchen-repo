import React from 'react';

const ServicesDisplay = ({ service }) => {

    //Distructure Properties
    const { _id, title, image, description, rating, price } = service;

    return (
        <div className='flex flex-col items-center p-10 shadow-xl rounded-xl'>
            <div className='mb-10'>
                <img className='h-64 w-96 rounded-lg hover:scale-110 duration-300 ease-out' src={image} alt="" />
            </div>
            <div>
                <h2 className='text-3xl font-bold mb-5'>{title}</h2>
                <p className='mb-5'>{description.length > 100 ? description.slice(0, 100) + '...' : description.length}</p>
                <p className='font-bold'>Price: $ {price} <small>/person</small></p>
            </div>
            <div className='mt-10'>
                <button className="btn btn-success">Success</button>
            </div>
        </div>
    );
};

export default ServicesDisplay;