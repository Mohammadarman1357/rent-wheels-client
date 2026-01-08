import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router';
import Footer from './Footer';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddCar = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const navigate = useNavigate();

    const handleAddCar = (e) => {
        e.preventDefault();

        const carName = e.target.carName.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const pricePerDay = e.target.pricePerDay.value;
        const image = e.target.image.value;
        const location = e.target.location.value;
        const providerName = e.target.providerName.value;
        const providerEmail = e.target.providerEmail.value;

        // console.log(carName, category, description, pricePerDay, image, location, providerName, providerEmail);
        const newCar = { carName, category, description, pricePerDay, image, location, providerName, providerEmail };

        axiosSecure.post('/cars', newCar)
            .then(data => {
                // console.log(data.data);
                if (data.data.insertedId) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Car has been Added.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
        e.target.reset();
    }

    return (
        <div>
            <button
                onClick={() => navigate(-1)}
                className='flex items-center font-medium mx-auto mt-5' >
                <IoArrowBack size={18}></IoArrowBack> Back to Products
            </button>
            <h3 className='text-4xl font-bold text-center mt-5'>Add  <span className='text-primary'>A Car</span></h3>

            <div className='bg-white m-5 md:my-10 md:mx-50 p-5 md:p-10 rounded-xl shadow-md'>
                <form onSubmit={handleAddCar}>
                    <fieldset className="fieldset">

                        {/* row 1 */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className='flex-1 flex flex-col'>
                                {/* car name */}
                                <label className="label mb-2 font-medium text-[#001931] text-[14px]">Car Name</label>
                                <input type="text" className="input w-full" name='carName' placeholder='e.g. Tesla Model 3' />
                            </div>

                            <div className='flex-1 flex flex-col '>
                                {/* category */}
                                <label className="label mb-2 font-medium text-[#001931] text-[14px]">Category</label>
                                <select type='text' name="category" className='input w-full' >
                                    <option >Select A Category</option>
                                    <option value="sedan">Sedan</option>
                                    <option value="suv">SUV</option>
                                    <option value="hatchback">Hatchback</option>
                                    <option value="luxury">Luxury</option>
                                    <option value="electric">Electric</option>
                                </select>
                            </div>
                        </div>


                        {/* row 2 */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className="flex-1 flex flex-col">
                                {/* description */}
                                <label className="label mb-2 font-medium text-[#001931] text-[14px]">Description</label>
                                <input type="text" className="input w-full" name='description' placeholder="Simple Description about your Product" />
                            </div>
                            <div className="flex-1 flex flex-col">
                                {/* Rent Price */}
                                <label className="label mb-2 font-medium text-[#001931] text-[14px]">Rent Price / Day</label>
                                <input type="text" className="input w-full" name='pricePerDay' placeholder='e.g. 2500 ' />
                            </div>
                        </div>


                        {/* row 3 */}
                        {/* Your Product Image URL */}
                        <label className="label mb-2 font-medium text-[#001931] text-[14px]">Your Car Image URL</label>
                        <input type="text" className="input w-full" name='image' placeholder="https://..." />

                        {/* row 4 */}
                        <label className="label mb-2 font-medium text-[#001931] text-[14px]">Location</label>
                        <input type="text" className="input w-full" name='location' placeholder="City, Country" />


                        {/* row 5 */}
                        <div className='flex flex-col md:flex-row gap-4'>
                            <div className="flex-1 flex flex-col">
                                {/* Provider Name */}
                                <label className="label mb-2 font-medium text-[#001931] text-[14px]">Provider Name</label>
                                <input type="text" className="input w-full" name='providerName' value={user?.displayName} readOnly />
                            </div>
                            <div className="flex-1 flex flex-col">
                                {/* Provider Email */}
                                <label className="label mb-2 font-medium text-[#001931] text-[14px]">Provider Email</label>
                                <input type="email" className="input w-full" name='providerEmail' value={user?.email} readOnly />
                            </div>
                        </div>

                        <button className="btn btn-primary mt-4" type='submit'>Add A Car</button>

                    </fieldset>
                </form>
            </div>

            <footer>
                <Footer></Footer>
            </footer>

        </div >
    );
};

export default AddCar;