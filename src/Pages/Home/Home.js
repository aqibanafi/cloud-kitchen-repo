import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import LimitedServices from './LimitedServices';

const Home = () => {
    //Load Data From Loader
    const services = useLoaderData()
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <LimitedServices key={service._id} service={service}></LimitedServices>)
                }
            </div>
        </div>
    );
};

export default Home;