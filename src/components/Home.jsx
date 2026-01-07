import React, { Suspense } from 'react';
import Banner from './Banner';
import Footer from './Footer';
import WhyRentWithUs from './WhyRentWithUs';
import Loading from '../pages/Loading';
import FeaturedCars from './FeaturedCars';

const featuredCarsPromise = fetch('http://localhost:3000/featured-cars').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Banner></Banner>

            <Suspense fallback={<Loading></Loading>}>
                <FeaturedCars featuredCarsPromise={featuredCarsPromise}></FeaturedCars>
            </Suspense>

            <WhyRentWithUs></WhyRentWithUs>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Home;