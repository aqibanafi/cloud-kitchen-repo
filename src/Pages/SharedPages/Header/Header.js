import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import Logo from '../../../logo.png'
import toast from 'react-hot-toast';


const Header = () => {
    //Import Auth Context
    const { user, logOut } = useContext(AuthContext)

    //Navigate
    const navigate = useNavigate()

    //Handle Log Out 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.error("You Have Logged Out")
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div className="navbar bg-orange-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-white font-bold dropdown-content mt-3 p-2 shadow bg-orange-600 rounded-box w-52">
                            {
                                user?.email ?
                                    <>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/services'>Services</Link></li>
                                        <li><Link to='/blog'>Blog</Link></li>
                                        <li><Link to='/myreviews'>My Reviews</Link></li>
                                        <li><Link to='/addservice'>Add Services</Link></li>
                                        <div>
                                            <div className='flex items-center p-3 rounded-xl gap-5 border shadow-2xl'>
                                                <img className='h-10 w-10 rounded-full' src={user.photoURL} alt="" />
                                                <p className='font-bold '>Welcome, {user?.displayName}</p>
                                            </div>
                                            <div className='flex items-center mt-3'>
                                                <button onClick={handleLogOut} className="btn glass text-white font-bold ml-10">log out</button>
                                            </div>
                                        </div>
                                    </>
                                    :
                                    <>
                                        <li><Link to='/'>Home</Link></li>
                                        <li><Link to='/services'>Services</Link></li>
                                        <li><Link to='/blog'>Blog</Link></li>
                                    </>

                            }
                        </ul>
                    </div>
                    <div className='flex items-center gap-5'>
                        <Link to='/'>
                            <img src={Logo} alt="" />
                        </Link>
                        <Link to='/' className="text-2xl font-bold text-white hidden md:block">Superkitch</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-white font-bold">
                        {
                            user?.email ?
                                <>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                    <li><Link to='/myreviews'>My Reviews</Link></li>
                                    <li><Link to='/addservice'>Add Services</Link></li>
                                    <div className='flex items-center p-3 rounded-xl ml-3 gap-5 border shadow-2xl'>
                                        <img className='h-10 w-10 rounded-full' src={user.photoURL} alt="" />
                                        <p className='font-bold '>Welcome, {user?.displayName}</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <button onClick={handleLogOut} className="btn glass text-white font-bold ml-10">log out</button>
                                    </div>
                                </>
                                :
                                <>
                                    <li><Link to='/'>Home</Link></li>
                                    <li><Link to='/services'>Services</Link></li>
                                    <li><Link to='/blog'>Blog</Link></li>
                                </>

                        }
                    </ul>
                </div>
                {
                    user?.email ?
                        <></>
                        :
                        <>
                            <div className="navbar-end">
                                <Link to='/login' className="btn bg-orange-600 border-0 text-white font-bold px-10 hover:bg-orange-900">Login</Link>
                            </div>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;