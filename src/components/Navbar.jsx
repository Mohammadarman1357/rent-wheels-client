import React, { use } from 'react';
import { Link } from 'react-router';
import { House, } from 'lucide-react';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';
import { FaCar } from 'react-icons/fa';
import { TbBrowserMaximize } from 'react-icons/tb';
import { RiApps2AddLine } from 'react-icons/ri';
import { CiCircleList } from 'react-icons/ci';
import { LuNotebookText } from 'react-icons/lu';


const Navbar = () => {
    const { user } = use(AuthContext);

    const links = <>

        <Link to={'/'}><li className='ml-2'><button className='focus:border-b-2 focus:border-b-[#632ee3] focus:text-[#632ee3] text-[16px] font-semibold'> <House className='w-5 h-5'></House> Home</button></li></Link>
        <Link to={'/browseCars'}><li className='ml-2'><button className='focus:border-b-2 focus:border-[#632ee3] focus:text-[#632ee3] text-[16px] font-semibold'> <TbBrowserMaximize className='w-5 h-5'></TbBrowserMaximize>Browse Cars</button></li></Link>

        {
            user && <>
                <Link to={'/addCar'}><li className='ml-2'><button className='focus:border-b-2 focus:border-[#632ee3] focus:text-[#632ee3] text-[16px] font-semibold'> <RiApps2AddLine className='w-5 h-5'></RiApps2AddLine> Add Car</button></li></Link>
                <Link to={'/myListings'}><li className='ml-2'><button className='focus:border-b-2 focus:border-[#632ee3] focus:text-[#632ee3] text-[16px] font-semibold'> <CiCircleList className='w-5 h-5'></CiCircleList>My Listings</button></li></Link>
                <Link to={'/myBookings'}><li className='ml-2'><button className='focus:border-b-2 focus:border-[#632ee3] focus:text-[#632ee3] text-[16px] font-semibold'> <LuNotebookText className='w-5 h-5'></LuNotebookText>My Bookings</button></li></Link>
            </>
        }
    </>

    const signlinks = <>
        <Link to='/auth/login'><li className='ml-2'><button className='focus:border-b-2 focus:border-[#632ee3] focus:text-[#632ee3] text-[16px] font-semibold'>Login</button></li></Link>
        <Link to='/auth/register'><li className='ml-2'><button className='focus:border-b-2 focus:border-[#632ee3] focus:text-[#632ee3] text-[16px] font-semibold'>Register</button></li></Link>

    </>

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm inter-font">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                            {
                                links
                            }

                            {
                                user ?
                                    <div className='flex gap-5 items-center mt-2'>
                                        <Link to={'/myprofile'}><img className='w-10 rounded-full' src={`${user?.photoURL}`} alt="" /></Link>
                                        <h1>{user?.displayName}</h1>
                                    </div>
                                    :
                                    signlinks
                            }

                        </ul>
                    </div>

                    <Link to={'/'}>
                        <span className="text-[30px] text-[#131313] font-bold flex items-center">
                            <span className=' text-[#632ee3] flex items-center gap-2'><FaCar></FaCar>Rent</span>
                            <span className='ml-2'>Wheels</span>
                        </span>
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex items-center ">

                        {
                            links
                        }


                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ?

                            <Link to={'/myprofile'}><img className='w-12 rounded-full' src={`${user?.photoURL}`} alt="" /></Link>

                            :
                            <div className='flex gap-2 items-center'>

                                <Link to={"/auth/login"} className='btn btn-outline border-[#632ee3] text-[#632ee3] hover:bg-gradient-to-r from-[#632ee3] to-[#9f62f2] hover:text-white px-6 hidden md:flex'>
                                    Login
                                </Link>

                                <Link to={"/auth/register"} className='btn border-none bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white px-6 hidden md:flex'>
                                    Register
                                </Link>

                            </div>
                    }



                </div>
            </div>
        </div>
    );
};

export default Navbar;
