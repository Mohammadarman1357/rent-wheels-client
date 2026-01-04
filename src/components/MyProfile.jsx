import React, { use } from 'react';
import { useLocation, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const MyProfile = () => {

    const { user, logOut } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handlelogOut = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to logged in!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logged Out!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Logged Out!",
                    text: "You have been successfully logged out.",
                    icon: "success"
                });

                logOut()
                    .then(() => {
                        navigate(`${location.state ? location.state : '/'}`)
                    })
                    .catch(error => {
                        console.log(error);
                    })

            }
        });
    }


    return (
        <div className='flex justify-center'>

            <div className='bg-white shadow-md rounded-xl p-5 flex flex-col items-center w-80'>
                <div className='mt-2'>
                    <img className='w-30 mx-auto rounded-full' src={`${user?.photoURL}`} alt="" />
                    <h1 className='font-bold text-center text-xl'>{user?.displayName}</h1>
                </div>
                <button onClick={handlelogOut} className='btn btn-primary text-white px- mt-2 w-1/2'>LogOut</button>
            </div>


        </div>
    );
};

export default MyProfile;