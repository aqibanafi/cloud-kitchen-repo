import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ServicesDisplay from '../ServicesDisplay/ServicesDisplay';

const Services = () => {

    //Set Page Title
    useTitle("My Services")
    //Load Data From Backend
    const services = useLoaderData()
    return (
        <div className='mt-20 mb-20'>
            <div className='mb-10'>
                <h1 className='text-5xl text-center font-bold text-orange-500'>My Services</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServicesDisplay key={service._id} service={service}></ServicesDisplay>)
                }
            </div>
        </div>

    );
};

export default Services;