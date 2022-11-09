import React from 'react';
import Image from '../../assets/images/nodejs.jpg'
import useTitle from '../../hooks/useTitle';

const Blog04 = () => {
    //Set Page Title
    useTitle("Blog 04")
    
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <div className="max-w-xl mb-6">
                        <span className='block text-2xl font-bold mb-10'>How does NodeJS handle multiple requests at the same time?</span>
                        <p className="text-base text-gray-700 md:text-lg">
                            We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.
                            <br />
                            <br />
                            <span className='font-bold text-xl block'>How NodeJS handle multiple client requests?</span>
                            <br />
                            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.
                            <br />
                            <br />
                            If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                            <br />
                            <br />
                            A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                            <br />
                            The cluster module allows easy creation of child processes that all share the same server ports.
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

export default Blog04;