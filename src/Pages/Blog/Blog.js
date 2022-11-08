import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <h2 className="text-3xl font-bold">Blogs</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Blog One  */}
                        <Link to='/blog01' className='h-60'>
                            <article className="flex flex-col dark:bg-gray-900">
                                <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                                <div className="flex flex-col flex-1 p-6">
                                    <Link rel="noopener noreferrer" href="#" alt='' className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Language</Link>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Difference between SQL and NoSQL?</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>June 1, 2022</span>
                                        <span>5.1K views</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                        {/* Blog Two  */}
                        <Link to='/blog02'>
                            <article className="flex flex-col dark:bg-gray-900">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                                </Link>
                                <div className="flex flex-col flex-1 p-6">
                                    <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                    <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Security</Link>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">What is JWT, and how does it work?</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>Apr 20, 2022</span>
                                        <span>2.0K views</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                        {/* Blog Three  */}
                        <Link to='/blog03'>
                            <article className="flex flex-col dark:bg-gray-900">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
                                </Link>
                                <div className="flex flex-col flex-1 p-6">
                                    <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                    <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Language</Link>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">What is the difference between javascript and NodeJS?</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>Dec 3, 2021</span>
                                        <span>1.7K views</span>
                                    </div>
                                </div>
                            </article>
                        </Link>
                        {/* Blog Four  */}
                        <Link to='/blog04'>
                            <article className="flex flex-col dark:bg-gray-900">
                                <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                                    <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
                                </Link>
                                <div className="flex flex-col flex-1 p-6">
                                    <Link rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                                    <Link rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Control</Link>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">How does NodeJS handle multiple requests at the same time?</h3>
                                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                        <span>May 14, 2022</span>
                                        <span>1K views</span>
                                    </div>
                                </div>
                            </article>
                        </Link>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;