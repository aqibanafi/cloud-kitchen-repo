import React from 'react';
import Image from '../../assets/images/jsnodejs.jpg'

const Blog03 = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <span className='text-3xl font-bold block mb-10'>What is the difference between javascript and NodeJS?</span>
                        <p className="text-base text-gray-700 md:text-lg">
                            <span className='block text-xl font-bold'>1. NodeJS :</span>
                            <br />
                            NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development
                            <br />
                            <br />
                            <span className='block text-xl font-bold'>2. JavaScript :</span>
                            <br />
                            Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.
                        </p>
                    </div>
                    <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={Image}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog03;