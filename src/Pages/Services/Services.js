import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServicesDisplay from '../ServicesDisplay/ServicesDisplay';
import { RevolvingDot } from 'react-loader-spinner'

const Services = () => {

    //Set Page Title
    useTitle("My Services")

    //Load Data State
    const [services, setServices] = useState([])

    //Load Data By Use Effect
    useEffect(() => {
        fetch('https://assignment-11-superkitch-server-side.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='mt-20 mb-20'>
            {
                services?.length === 0 ?
                    <>
                        <div className='flex justify-center mt-40 mb-40'>
                            <RevolvingDot
                                height="100"
                                width="100"
                                radius="40"
                                color="#FFA500"
                                secondaryColor=''
                                ariaLabel="revolving-dot-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                            />
                        </div>
                    </>
                    :
                    <>
                        <div>
                            <div className='mb-10'>
                                <h1 className='text-5xl text-center font-bold text-orange-500'>My Services</h1>
                            </div>
                            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                                {
                                    services?.map(service => <ServicesDisplay key={service._id} service={service}></ServicesDisplay>)
                                }
                            </div>
                        </div>
                    </>
            }


        </div>

    );
};

export default Services;