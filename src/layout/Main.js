import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../Pages/SharedPages/Footer/Footer';
import Header from '../Pages/SharedPages/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <ScrollRestoration />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;