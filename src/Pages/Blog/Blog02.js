import React from 'react';
import JWT from '../../assets/images/jwt.png'

const Blog02 = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <h3 className='text-4xl font-bold mb-5'>What is JWT, and how does it work?</h3>
                    <div className="max-w-xl mb-6">
                        <p className="text-base text-gray-700 md:text-lg">
                           <span className='text-xl font-bold'>What is JWT?</span>
                           <br />
                           <br />
                           JWT or, JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                           <br />
                           <br />
                           <span className='text-xl font-bold'>What Is JSON?</span>
                           <br />
                           For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.
                           <br />
                           <br />
                           <span className='text-xl font-bold'>What Are Tokens?</span>
                           <br />
                           Now that you understand JSON as a data text format, you may be wondering What are tokens? To put it simply, a token is a string of data that represents something else, such as an identity. In the case of authentication, a non-JWT based token is a string of characters that allow the receiver to validate the sender’s identity. The important distinction here is lack of meaning within the characters themselves. 
                        </p>
                    </div>
                    <div className="grid gap-5 row-gap-8 sm:grid-cols-2">
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src={JWT}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Blog02;