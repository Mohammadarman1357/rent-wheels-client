import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaUserCog } from 'react-icons/fa';
import { IoLogoModelS } from 'react-icons/io';
import { Link } from 'react-router';

const Car = ({ featuredCar }) => {
    const { _id, carName, pricePerDay, category, providerName, image, location } = featuredCar;


    // ■	Car Name
    // ■	Rent Price (per day)
    // ■	Car Type / Model
    // ■	Provider Name
    // ■	“View Details” button (redirects to car details page)

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="p-4">
                <img
                    src={image}
                    alt={carName}
                    className="rounded-xl w-[100%] h-70"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{carName}</h2>

                <span className='flex items-center justify-between'>
                    <span className='flex text-xl gap-1 font-medium items-center'>
                        <FaUserCog></FaUserCog>
                        <p>{providerName}</p>
                    </span>
                    <span className='flex gap-1 items-center'>
                        <CiLocationOn></CiLocationOn>
                        <p>{location}</p>
                    </span>
                </span>

                <hr className='my-2' />

                <span className='flex justify-between'>
                    <p className='text-xl font-semibold '>${pricePerDay}/Day</p>
                    <span className='badge badge-soft badge-primary flex rounded-full'><IoLogoModelS></IoLogoModelS> {category}</span>
                </span>
                <div className="card-actions">
                    <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full font-semibold">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Car;