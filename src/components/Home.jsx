import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import WhyRentWithUs from './WhyRentWithUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>


            <WhyRentWithUs></WhyRentWithUs>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;