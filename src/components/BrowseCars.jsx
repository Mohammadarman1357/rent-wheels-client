import React from 'react';
import { useLoaderData } from 'react-router';
import Footer from './Footer';
import Car from './Car';

const BrowseCars = () => {
    const cars = useLoaderData();
    // console.log(cars);

    return (
        <div className='my-10'>
            <h3 className='text-4xl font-bold text-center mt-5'>Browse <span className='text-primary'>Car</span></h3>

            <div className='grid p-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    cars.map(car =>
                        <Car
                            key={car._id}
                            car={car}>
                        </Car>
                    )
                }
            </div>

            <footer className='mt-6'>
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default BrowseCars;