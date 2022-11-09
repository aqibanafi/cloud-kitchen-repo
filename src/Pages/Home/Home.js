import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import LimitedServices from './LimitedServices';
import Clock from '../../assets/icons/extra-clock.png';
import Location from '../../assets/icons/extra-location.png';
import { FaFacebookF, FaTwitter, FaReddit, FaDiscord } from 'react-icons/fa';
import Imageone from '../../assets/images/section-images/delicious-chicken-table.jpg'
import Imagetwo from '../../assets/images/section-images/grilled-chicken-legs-barbecue-sauce-with-pepper-seeds-parsley-salt-black-stone-plate-black-stone-table.jpg'
import Imagethree from '../../assets/images/section-images/grilled-chicken-legs-flaming-grill-with-grilled-vegetables-with-tomatoes-potatoes-pepper-seeds-salt.jpg'
import Imagefour from '../../assets/images/section-images/half-grilled-chicken-plate.jpg'

const Home = () => {
    //Load Data From Loader
    const services = useLoaderData()
    return (
        <div className='mb-20'>
            {/* Banner Section  */}
            <div>
                <Banner></Banner>
            </div>
            {/* Three Service Display Section  */}
            <div className='mt-20'>
                <div>
                    <h1 className='text-center text-5xl font-bold text-orange-500 mb-12'>My Latest Services</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center'>
                    {
                        services.map(service => <LimitedServices key={service._id} service={service}></LimitedServices>)
                    }
                </div>
            </div>
            <div className='flex justify-end mr-5 mt-10'>
                <Link to='/services'>
                    <button className="btn px-10 text-white bg-orange-600 border-0 hover:bg-orange-800">Show all</button>
                </Link>
            </div>
            {/* Extra Section One  */}
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-20'>
                <div>
                    <div className='bg-gray-800 text-white p-[114px] flex flex-col items-center gap-5'>
                        <span className='bg-orange-600 p-2'>Call us</span>
                        <p className='text-3xl font-bold mb-5'>+1-202-555-016</p>
                        <div className='flex flex-col gap-10'>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-20' src={Clock} alt="" />
                                </div>
                                <div>
                                    <p>mon-thu: 11.00 – 23.00</p>
                                    <p><small>sat:</small> 12.00 – 23.00</p>
                                    <p><small>sun:</small> 12.00 – 21.00</p>
                                </div>
                            </div>
                            <div className='flex gap-5'>
                                <div>
                                    <img className='w-20' src={Location} alt="" />
                                </div>
                                <div>
                                    <p>60 East 65th Street</p>
                                    <p>New York City</p>
                                    <p>NY 10065</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-3 mt-3'>
                            <div className='bg-white p-3'>
                                <FaFacebookF className='text-black font-bold text-xl'></FaFacebookF>
                            </div>
                            <div className='bg-white p-3'>
                                <FaTwitter className='text-black font-bold text-xl'></FaTwitter>
                            </div>
                            <div className='bg-white p-3'>
                                <FaReddit className='text-black font-bold text-xl'></FaReddit>
                            </div>
                            <div className='bg-white p-3'>
                                <FaDiscord className='text-black font-bold text-xl'></FaDiscord>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex h-full w-full'>
                    <div>
                        <img className='h-[320px] w-[500px]' src={Imageone} alt="" />
                        <img className='h-[320px] w-[500px]' src={Imagetwo} alt="" />
                    </div>
                    <div>
                        <img className='h-[320px] w-[500px]' src={Imagethree} alt="" />
                        <img className='h-[320px] w-[500px]' src={Imagefour} alt="" />
                    </div>
                </div>
            </div>
            {/* Extra Section Two  */}
            <div className='relative h-[600px] text-white mt-20'>
                <div className='banner-image'>
                    <img className="absolute inset-0 object-cover w-full h-full" src="https://i.ibb.co/jrqSMXS/dinner.jpg" alt="" />
                </div>
                <div className='flex justify-center items-center pt-[200px]'>
                    <div className='relative flex flex-col gap-5'>
                        <h2 className='font-bold text-5xl'>Premium Dinner Service</h2>
                        <p>This chiken's name explains itself. Of course, you can also top it
                            with crisp lettuce, tomatoes and anything else.</p>
                        <p className='font-bold text-5xl'>$ 210</p>
                        <div className='mt-2'>
                            <button className="btn btn-outline btn-accent px-10">Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;