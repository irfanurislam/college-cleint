import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../pages/SharedPage/Navbar';
import Footer from '../pages/SharedPage/Footer';

const Main = () => {
    return (
        <div className='mx-8'>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;