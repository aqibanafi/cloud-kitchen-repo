import React from 'react';
import { Link } from 'react-router-dom';
import SQL from '../../assets/images/sql-vs-no-sql-1.png';
import JWT from '../../assets/images/jwt.png';
import Node from '../../assets/images/jsnodejs.jpg';
import Nodejs from '../../assets/images/nodejs.jpg';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    //Set Page Title
    useTitle("Blogs")

    return (
        <div>
            <section className="py-6 sm:py-12 mb-20">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-5xl font-bold text-orange-500 mb-20">Blogs</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
                        {/* Blog One  */}
                        <article className="flex flex-col shadow-xl border h-[500px]" data-aos="fade-up" data-aos-duration="3000">
                            <img alt="" className="object-cover w-full h-52 rounded-lg p-5 hover:scale-105 duration-300 ease-out" src={SQL} />
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" alt='' className="text-xs tracking-wider uppercase hover:underline text-orange-500">Language</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Difference between SQL and NoSQL?</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>June 1, 2022</span>
                                    <span>5.1K views</span>
                                </div>
                                <div className='flex justify-center mt-10'>
                                    <Link to='/blog01'>
                                        <button className="btn btn-success text-white bg-orange-600 border-0 px-5 hover:bg-orange-800">view Details</button>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Blog Two  */}
                        <article className="flex flex-col shadow-xl border h-[500px]" data-aos="fade-up" data-aos-duration="3000">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 rounded-lg p-5 hover:scale-105 duration-300 ease-out" src={JWT} />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-orange-500">Security</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">What is JWT, and how does it work?</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>Apr 20, 2022</span>
                                    <span>2.0K views</span>
                                </div>
                                <div className='flex justify-center mt-10'>
                                    <Link to='/blog02'>
                                        <button className="btn btn-success text-white bg-orange-600 border-0 px-5 hover:bg-orange-800">view Details</button>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Blog Three  */}
                        <article className="flex flex-col shadow-xl border h-[500px]" data-aos="fade-up" data-aos-duration="3000">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 rounded-lg p-5 hover:scale-105 duration-300 ease-out" src={Node} />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-orange-500">Language</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">What is the difference between javascript and NodeJS?</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>Dec 3, 2021</span>
                                    <span>1.7K views</span>
                                </div>
                                <div className='flex justify-center mt-10'>
                                    <Link to='/blog03'>
                                        <button className="btn btn-success text-white bg-orange-600 border-0 px-5 hover:bg-orange-800">view Details</button>
                                    </Link>
                                </div>
                            </div>
                        </article>

                        {/* Blog Four  */}
                        <article className="flex flex-col shadow-xl border h-[500px]" data-aos="fade-up" data-aos-duration="3000">
                            <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                <img alt="" className="object-cover w-full h-52 rounded-lg p-5 hover:scale-105 duration-300 ease-out" src={Nodejs} />
                            </Link>
                            <div className="flex flex-col flex-1 p-6">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-orange-500">Control</Link>
                                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">How does NodeJS handle multiple requests at the same time?</h3>
                                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                    <span>May 14, 2022</span>
                                    <span>1K views</span>
                                </div>
                                <div className='flex justify-center mt-10'>
                                    <Link to='/blog04'>
                                        <button className="btn btn-success text-white bg-orange-600 border-0 px-5 hover:bg-orange-800">view Details</button>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;