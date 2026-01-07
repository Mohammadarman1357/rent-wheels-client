import React, { use } from 'react';
import Car from './Car';

const FeaturedCars = ({ featuredCarsPromise }) => {
    const featuredCars = use(featuredCarsPromise);
    // console.log(featuredCars);
    return (
        <div className='my-10 mx-5'>
            <h1 className='font-bold text-5xl text-center mb-4'>
                Featured
                <span className='text-primary ml-2'>Cars</span>
            </h1>

            <div className='grid p-4 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    featuredCars.map(featuredCar =>
                        <Car key={featuredCar._id}
                            featuredCar={featuredCar}>
                        </Car>
                    )
                }
            </div>

        </div>
    );
};

export default FeaturedCars;