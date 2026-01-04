import React from 'react';
import { FaCar, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaSkype, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#001931] py-8 px-15 inter-font'>
            <div className='flex justify-between items-center'>
                <Link to={'/'}>
                    <span className="text-[30px] text-[#131313] font-bold flex items-center">
                        <span className=' text-[#632ee3] flex items-center gap-2'><FaCar></FaCar>Rent</span>
                        <span className='ml-2 text-white'>Wheels</span>
                    </span>
                </Link>
                <span></span>
            </div>

            <footer className="footer sm:footer-horizontal text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Contacts and Support</h6>
                    <a className="link link-hover">support@rentwheels.com</a>
                    <a className="link link-hover">+8801875-903709</a>
                    <a className="link link-hover">Nanupur, Fatickchari, Chattogram</a>
                </nav>
                <nav className='text-white flex flex-col items-center gap-3'>
                    <h1 className='font-medium text-xl'>Social Links</h1>
                    <span className='flex gap-4 '>
                        <FaXTwitter></FaXTwitter>
                        <FaLinkedinIn></FaLinkedinIn>
                        <FaFacebook></FaFacebook>
                        <FaSkype></FaSkype>
                    </span>
                </nav >
            </footer>

            <hr className='border-[#E5E7EB] my-4' />
            <p className='text-center text-[#FAFAFA]'>Copyright © 2026 - All right reserved</p>
        </div>
    );
};

export default Footer;