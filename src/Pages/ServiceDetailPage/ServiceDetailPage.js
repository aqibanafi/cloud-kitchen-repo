import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Convenience from '../../assets/icons/convenience.png'
import Clock from '../../assets/icons/clock.png'
import Cooking from '../../assets/icons/cooking.png'
import Money from '../../assets/icons/money.png'
import Choose from '../../assets/icons/choose.png'
import Clean from '../../assets/icons/hard-drive.png'
import Map from '../../assets/icons/map.png'
import Review from '../../assets/icons/complain.png'
import Globe from '../../assets/icons/international.png'

const ServiceDetailPage = () => {
    //Load Single Data From Backend
    const { title, description, price, rating, image } = useLoaderData()
    return (
        <div className='container mx-auto'>
            <div className='bg-orange-500'>
                <h1 className='text-5xl text-center font-bold text-white p-20'>{title}</h1>
            </div>
            <div className='flex justify-center mt-10'>
                <img src={image} alt="" />
            </div>
            <div className='mt-10'>
                <p>{description}</p>
            </div>
            <div className='mt-20'>
                <h2 className='text-3xl font-bold text-center mb-10'>6 Special Benefits Of Taking Our Food & Launch Services</h2>
                <div className='flex justify-center'>
                    <p className='mb-10 w-2/6 text-center'>EcommerceBD offers a plethora of advantages, whether you’re eating lunch at the workplace or a meal with your family at home. Some, but not all, of the reasons why you should use a food delivery service are listed below.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                    <div className='flex gap-5 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                        <div>
                            <img className='w-40' src={Convenience} alt="" />
                        </div>
                        <div>
                            <div className='mb-3'>
                                <h3 className='text-xl font-bold'>1. Convenience</h3>
                            </div>
                            <div>
                                <p>Having fresh food delivered to you is more than convenient. Food delivery services are simple to use, and placing an order is as simple as making a phone call or clicking a button.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                        <div>
                            <img className='w-40' src={Clock} alt="" />
                        </div>
                        <div>
                            <div className='mb-3'>
                                <h3 className='text-xl font-bold'>2. Saves time</h3>
                            </div>
                            <div>
                                <p>The last thing you want to do when you take a break to eat is go out and get food. You are losing crucial time by eating at a restaurant or picking up a take-out order.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                        <div>
                            <img className='w-40' src={Cooking} alt="" />
                        </div>
                        <div>
                            <div className='mb-3'>
                                <h3 className='text-xl font-bold'>3. No Cooking</h3>
                            </div>
                            <div>
                                <p>Cooking for oneself takes a lot of effort and time. People eat frozen meals to avoid cooking because they are lazy. Consider ordering a healthy lunch from us. We are the leading provider.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                        <div>
                            <img className='w-40' src={Money} alt="" />
                        </div>
                        <div>
                            <div className='mb-3'>
                                <h3 className='text-xl font-bold'>4. Saves money</h3>
                            </div>
                            <div>
                                <p>"Time is money," as the saying goes. As a result, the time you spend preparing or procuring food for yourself could be better spent elsewhere. So get in touch with us without any doubt.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                        <div>
                            <img className='w-40' src={Choose} alt="" />
                        </div>
                        <div>
                            <div className='mb-3'>
                                <h3 className='text-xl font-bold'>5. Lots of options</h3>
                            </div>
                            <div>
                                <p>Have you ever grown tired of eating the same thing again and over? Make a concoction and have it delivered. At EcommerceBD, we offer a plethora of options to pick from in order to spice up your life!</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-5 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                        <div>
                            <img className='w-40' src={Clean} alt="" />
                        </div>
                        <div>
                            <div className='mb-3'>
                                <h3 className='text-xl font-bold'>6. Easy cleanup</h3>
                            </div>
                            <div>
                                <p>Dishes will no longer be a problem. Food is delivered in disposable containers, which means there is little to no cleanup. After you've finished your dinner, just dispose of the containers.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-20'>
                    <h2 className='text-3xl font-bold text-center mb-10'>Our Food & Lunch Services Deliver Excellence Everyday</h2>
                    <div className='flex justify-center'>
                        <p className='mb-10 w-2/6 text-center'>We source the greatest ingredients from reputable vendors since we have an unwavering preference for fresh food. Our food and lunch services goal is to use chemical-free and fresh ingredients in all of our products.</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10'>
                        <div className='flex flex-col items-center gap-3 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                            <div>
                                <img className='w-20' src={Map} alt="" />
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <h2 className='text-xl font-bold'>Menu For All Location</h2>
                                <p>We at ecommerceBD offer micro-event-specific set menus that are completely customizable, right down to the level of spices and toothpick length. Simply contact us for a no-obligation consultation.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-3 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                            <div>
                                <img className='w-20' src={Review} alt="" />
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <h2 className='text-xl font-bold'>Clients & Reviews</h2>
                                <p>Find out more about our clients and the projects that we're most proud of. We have served a diverse variety of clientele, from the Honorable Prime Minister to the world's most powerful people.</p>
                            </div>
                        </div>
                        <div className='flex flex-col items-center gap-3 shadow-xl p-10 hover:scale-105 duration-300 ease-out'>
                            <div>
                                <img className='w-20' src={Globe} alt="" />
                            </div>
                            <div className='flex flex-col items-center gap-3'>
                                <h2 className='text-xl font-bold'>Global Standard</h2>
                                <p>We run a commercial kitchen that adheres to the strictest of guidelines. Our 10,000+ square foot facility in Dhaka, Bangladesh is advantageously positioned. So get in touch with us today.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailPage;