import React, { useRef } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useLoaderData, useNavigate } from 'react-router';

const CarDetails = () => {
    const car = useLoaderData();
    const bidModalRef = useRef(null);
    const navigate = useNavigate();

    const handleBidModalOpen = () => {
        bidModalRef.current.showModal();
    }

    const handleBidSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>

            {/* car info */}
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 md:p-10'>

                {/*left side */}
                <div className='rounded-2xl col-span-1'>
                    <div className='mb-7'>
                        <img src={car.image} className='w-full rounded-[8px]' alt="car image" />
                    </div>
                    <div className='rounded-[8px] p-6 space-y-6 bg-white'>
                        <h3 className='font-medium text-2xl'>Product Description</h3>

                        <hr className='border-[#001931]' />
                        <p className='text-[#969A9D] font-medium'>
                            {car.description}
                        </p>
                    </div>
                </div>

                {/*right side */}
                <div className='col-span-2 space-y-6'>
                    <button
                        onClick={() => navigate(-1)}
                        className='flex items-center font-medium' >
                        <IoArrowBack size={18}></IoArrowBack> Back to Cars
                    </button>
                    <h1 className='font-bold text-4xl'>{car.carName}</h1>
                    <div className="badge badge-soft bg-base-300 badge-primary rounded-full">{car.category}</div>
                    <div className='bg-white rounded-[8px] p-5'>
                        <h1 className='text-[#4CAF50] font-bold text-2xl'>{car.pricePerDay}</h1>
                        <p>Rent Price</p>
                    </div>
                    <div className='bg-white rounded-[8px] p-5'>
                        <h1 className='font-bold text-2xl mb-2'>Car Details</h1>
                        <h4><span className='font-semibold mr-2'>Car ID: </span> {car._id}</h4>

                        <h4><span className='font-semibold mr-2'>Status:</span>
                            {car?.status == "available" ?
                                <span className='badge badge-success rounded-full mr-2'>{car.status}</span>
                                :
                                <span className='badge badge-error rounded-full mr-2'>Unavailable</span>
                            }
                        </h4>

                    </div>
                    <div className='bg-white rounded-[8px] p-5'>
                        <h1 className='font-bold text-2xl mb-2'>Provider Information</h1>

                        <h4><span className='font-semibold mr-2'>Provider :</span> {car.providerName}</h4>
                        <h4><span className='font-semibold mr-2'>Email :</span> {car.providerEmail}</h4>
                        <h4><span className='font-semibold mr-2'>Location :</span> {car.location}</h4>

                    </div>

                    <button
                        onClick={handleBidModalOpen}
                        className="btn btn-primary w-full">
                        Book Now
                    </button>

                </div>

                {/* modal */}
                <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl mb-3">Give Seller Your Offered Price!</h3>

                        <form onSubmit={handleBidSubmit}>
                            
                        </form>


                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default CarDetails;