import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesDisplay = ({ service }) => {

    //Distructure Properties
    const { _id, title, image, description, rating, price } = service;

    return (
        <div className='flex flex-col items-center p-10 shadow-xl rounded-xl'>
            <div className='mb-10'>
                <PhotoProvider>
                    <PhotoView src={image}>
                        <img className='h-64 w-96 rounded-lg hover:scale-110 duration-300 ease-out' src={image} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div>
                <h2 className='text-3xl font-bold mb-5'>{title}</h2>
                <p className='mb-5'>{description.length > 100 ? description.slice(0, 100) + '...' : description.length}</p>
                <div className='flex justify-between'>
                    <p className='font-bold'>Price: $ {price} <small>/person</small></p>
                    <div className='flex items-center gap-5'>
                        <p>Ratings: {rating}</p>
                        <FaStar className='text-yellow-500'></FaStar>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <Link to={`/servicedetail/${_id}`}>
                    <button className="btn btn-success">Success</button>
                </Link>
            </div>
        </div>
    );
};

export default ServicesDisplay;