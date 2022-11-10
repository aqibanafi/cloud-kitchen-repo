import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/logo.png'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Lottie from "lottie-react";
import reader from '../../assets/lottie/registration.json'
import toast from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const Registration = () => {

    //Set Page Title
    useTitle("Registration")

    //Import Auth Info 
    const { createUser, updateUserProfile, googleProviderLogin, logOut } = useContext(AuthContext)

    //Set Error State
    const [error, setError] = useState('')

    //Terms and condition accepted State
    const [accepted, setAccepted] = useState(false)

    //Navigate and Location
    const navigate = useNavigate()

    //Get Name
    const [name, setName] = useState(null)
    const getName = event => {
        event.preventDefault()
        const getUserName = event.target.name.value;
        setName(getUserName)
    }

    //Handle Create Account
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                const currentUser = {
                    email: user?.email
                }
                //Get JWT Token
                fetch('https://assignment-11-superkitch-server-side.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('superkitch', data.token)
                        toast.success("Account Created Successfully")
                        handleUpdateUserProfile(name, photoURL)
                        logOut();
                        navigate('/login')
                    })
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })
    }

    //Handle Google Login
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignUp = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                toast.success("You Have Successfully Logged in")
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user?.email
                }
                //Get JWT Token
                fetch('https://assignment-11-superkitch-server-side.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('superkitch', data.token)
                        toast.success("Account Created Successfully")
                        navigate('/login')
                    })
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })
    }

    //Handle Update User Profile 
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    //Terms and Conditions Check
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div className='container mx-auto mt-20'>
            <h1 className='text-center text-5xl font-bold text-orange-500 mb-12'>Please Registration Here</h1>
            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-10 mt-20 mb-20'>
                    <div className="w-full flex min-h-full items-center border shadow-xl justify-center py-12 px-4 sm:px-6 lg:px-8">
                        <div className="w-full max-w-md space-y-8">
                            <div>
                                <img
                                    className="mx-auto h-24 w-auto"
                                    src={Logo}
                                    alt="Your Company"
                                />
                                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                    Please Registration To Get Access
                                </h2>
                                <p className="mt-2 text-center text-sm text-gray-600">
                                    Or{' '}
                                    <Link className="font-medium text-amber-500 hover:text-amber-700">
                                        start your 14-day free trial
                                    </Link>
                                </p>
                            </div>
                            <div>
                                <p className='mb-5 font-bold text-center'>Registration with</p>
                                <div className='flex flex-wrap justify-center gap-5'>
                                    <Link onClick={handleGoogleSignUp}>
                                        <div className='px-16 py-3 rounded-lg bg-slate-200'>
                                            <FaGoogle className='text-amber-500 font-bold text-2xl'></FaGoogle>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <p className='text-center text-gray-400'>Or Continue with</p>
                            </div>
                            <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                                <input type="hidden" name="remember" defaultValue="true" />
                                <div className="-space-y-px rounded-md shadow-sm">
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Full Name
                                        </label>
                                        <input
                                            name="name"
                                            onBlur={getName}
                                            type="text"
                                            autoComplete="name"
                                            required
                                            className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Email address
                                        </label>
                                        <input
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email-address" className="sr-only">
                                            Photo URL
                                        </label>
                                        <input
                                            name="photoURL"
                                            type="text"
                                            autoComplete="photo"
                                            className="mb-5 relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="Photo URL"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="sr-only">
                                            Password
                                        </label>
                                        <input
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            placeholder="*******"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <div onClick={handleAccepted} className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                            Accept <Link className='text-amber-500'>Terms & Conditions</Link>
                                        </label>
                                    </div>

                                    <div className="text-sm">
                                        <div href="#" className="font-normal">
                                            Already Registered? Please <Link to='/login' className='text-amber-500'>Log in</Link>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className='text-red-600'>{error}</p>
                                </div>
                                <div>
                                    <button
                                        disabled={!accepted}
                                        type="submit"
                                        className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 text-white font-bold hover:bg-amber-800"
                                    >
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                        </span>
                                        Registration
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className='w-3/5'>
                            <Lottie animationData={reader} loop={true}></Lottie>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Registration;