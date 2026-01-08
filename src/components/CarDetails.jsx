import React, { useRef, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useLoaderData, useNavigate } from 'react-router';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CarDetails = () => {
    const car = useLoaderData();
    const { _id: carId, status: carStatus } = car;
    const { user } = useAuth();
    const bookingModalRef = useRef(null);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    const [bookings, setBookings] = useState([]);

    const handleBidModalOpen = () => {
        bookingModalRef.current.showModal();
    }

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        const userName = e.target.userName.value;
        const userEmail = e.target.userEmail.value;
        const pricePerDay = e.target.pricePerDay.value;

        // console.log(carId, carStatus, userName, userEmail, pricePerDay);

        const newBooking = {
            car: carId,
            userName: userName,
            userEmail: userEmail,
            userImage: user?.photoURL,
            pricePerDay: pricePerDay,
            status: carStatus
        }

        axiosSecure.post('/bookings', newBooking)
            .then(data => {
                // console.log(data.data);
                if (data.data.insertedId) {
                    // bookingModalRef close
                    bookingModalRef.current.close();
                    // Sweet alert
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Booking has been Confirmed.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    // add the new booking to the state
                    newBooking._id = data.insertedId;
                    const newBookings = [...bookings, newBooking];
                    newBookings.sort((a, b) => b.pricePerDay - a.pricePerDay);
                    setBookings(newBookings);
                }
            })
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

                    {
                        car?.status !== "available" ?
                            <button
                                className="btn disabled: bg-red-500 w-full">
                                Booked
                            </button>
                            :
                            <button
                                onClick={handleBidModalOpen}
                                className="btn btn-primary w-full">
                                Book Now
                            </button>

                    }


                </div>

                {/* modal */}
                <dialog ref={bookingModalRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl mb-3">Give Booking Your Offered Price!</h3>

                        <form onSubmit={handleBookingSubmit}>
                            <fieldset className="fieldset">

                                <div className='flex gap-4'>
                                    <div>
                                        {/* name */}
                                        <label className="label mb-2 font-medium text-[#001931] text-[14px]">Name</label>
                                        <input type="text" className="input" name='userName' defaultValue={user?.displayName} readOnly />
                                    </div>
                                    <div>
                                        {/* email */}
                                        <label className="label mb-2 font-medium text-[#001931] text-[14px]">Email</label>
                                        <input type="email" name='userEmail' className="input" defaultValue={user?.email} readOnly />
                                    </div>
                                </div>

                                {/*booking amount */}
                                <label className="label mb-2 font-medium text-[#001931] text-[14px]">Your Booking</label>
                                <input type="text" className="input w-full" name='pricePerDay' placeholder="Your Booking Amount" />

                                <div className="modal-action">
                                    {/* if there is a button in form, it will close the modal */}
                                    <div className='flex gap-4'>

                                        <button
                                            className="btn btn-outline border-[#632ee3] text-[#632ee3]"
                                            type='button'
                                            onClick={() => bookingModalRef.current.close()}>
                                            Close
                                        </button>

                                        <button className="btn btn-primary" type='submit'>Book Now</button>
                                    </div>
                                </div>

                            </fieldset>
                        </form>


                    </div>
                </dialog>

            </div>

            
        </div>
    );
};

export default CarDetails;