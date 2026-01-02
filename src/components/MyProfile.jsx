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
        <div>

            <div className='flex flex-col gap-2 items-center'>
                <div className='flex gap-5 items-center mt-2'>
                    <Link to={'/myprofile'}><img className='w-10 rounded-full' src={`${user?.photoURL}`} alt="" /></Link>
                    <h1>{user?.displayName}</h1>
                </div>
                <button onClick={handlelogOut} className='btn border-none bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white px-10 mt-2 w-full'>LogOut</button>
            </div>


        </div>
    );
};

export default MyProfile;