import React from 'react';
import bookingImg from '../assets/booking.png';
import rateImg from '../assets/rates.png';
import providerImg from '../assets/provider.png';
import supportImg from '../assets/support.png';

const WhyRentWithUs = () => {
    return (
        <div className='my-6'>
            <h1 className='font-bold text-5xl text-center mb-4'>
                Why Rent
                <span className='text-primary ml-2'>With Us</span>
            </h1>

            <div className='flex flex-col md:flex-row gap-5 justify-center'>

                <div className='flex gap-2 items-center bg-white shadow-md p-5 rounded-xl'>
                    <img className='w-15' src={bookingImg} alt="" />
                    <span className='font-bold text-2xl'>
                        <h1 className='text-primary'>Easy</h1>
                        <h1>Booking</h1>
                    </span>
                </div>
                <div className='flex gap-2 items-center bg-white shadow-md p-5 rounded-xl'>
                    <img className='w-15' src={rateImg} alt="" />
                    <span className='font-bold text-2xl'>
                        <h1 className='text-primary'>Affordable</h1>
                        <h1>Rates</h1>
                    </span>
                </div>
                <div className='flex gap-2 items-center bg-white shadow-md p-5 rounded-xl'>
                    <img className='w-15' src={providerImg} alt="" />
                    <span className='font-bold text-2xl'>
                        <h1 className='text-primary'>Trusted</h1>
                        <h1>Providers</h1>
                    </span>
                </div>
                <div className='flex gap-2 items-center bg-white shadow-md p-5 rounded-xl'>
                    <img className='w-15' src={supportImg} alt="" />
                    <span className='font-bold text-2xl'>
                        <h1 className='text-primary'>24/7</h1>
                        <h1>Support</h1>
                    </span>
                </div>

            </div>
        </div>
    );
};

export default WhyRentWithUs;