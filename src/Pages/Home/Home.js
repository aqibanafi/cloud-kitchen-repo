import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import LimitedServices from './LimitedServices';

const Home = () => {
    //Load Data From Loader
    const services = useLoaderData()
    return (
        <div className='mb-20'>
            <div>
                <Banner></Banner>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <LimitedServices key={service._id} service={service}></LimitedServices>)
                }
            </div>
            <div className='flex justify-center mt-10'>
                <Link to='/services'>
                    <button className="btn btn-wide">Show all</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;