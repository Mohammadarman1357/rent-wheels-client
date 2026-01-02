import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Root = () => {
    
    return (
        <div className='max-w-7xl mx-auto bg-base-200'>
            
            <Navbar></Navbar>
            <Outlet></Outlet>
            
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;