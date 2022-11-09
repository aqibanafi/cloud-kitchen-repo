import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const LimitedServices = ({ service }) => {
    //Distructure Data 
    const { _id, title, image, description, rating, price } = service;
    return (
        <div>
            <div className='flex flex-col items-center p-10 shadow-xl border rounded-xl'>
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
                    <div className='flex gap-32'>
                        <div>
                            <p className='font-bold'>Price: $ {price} <small>/person</small></p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p>Ratings: {rating}</p>
                            <FaStar className='text-yellow-500'></FaStar>
                        </div>
                    </div>
                </div>
                <div className='mt-12'>
                    <Link to={`/servicedetail/${_id}`}>
                        <button className="btn btn-success text-white bg-orange-600 border-0 px-20 hover:bg-orange-800">view details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LimitedServices;