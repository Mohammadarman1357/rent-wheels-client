import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Search } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import { use } from "react";

const Banner = ({ featuredCarsPromise }) => {
    const cars = use(featuredCarsPromise);
    
    return (
        <div className="relative h-100 md:h-120 w-full overflow-hidden">

            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                autoplay={{ delay: 4000 }}
                effect="fade"
                loop
                pagination={{ clickable: true }}
                className="h-full"
            >
                {cars.map((car) => (
                    <SwiperSlide key={car.id}>
                        <div className="h-full w-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${car.image})` }}>

                            <div className="h-full w-full bg-[#0d007ec9] flex items-center">

                                {/* Text Left */}
                                <div className="px-6 md:px-16 max-w-xl text-white">

                                    <h1 className="text-3xl uppercase md:text-5xl font-bold mb-3">
                                        {car.carName}
                                    </h1>
                                    <p className="text-lg md:text-xl">
                                        {car.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute bottom-10 md:bottom-30 left-0 right-0 z-20 px-4 md:px-16">

                <div className="join mt-5">
                    <div>
                        <label className="input validator border-none join-item rounded-l-full shadow-md w-50 md:w-100">
                            <Search></Search>
                            <input
                                type="search"
                                placeholder="Search car by name.."
                            />
                        </label>
                    </div>
                    <button className="btn btn-primary join-item rounded-r-full shadow-md"><FaSearch></FaSearch> </button>
                </div>

            </div>
        </div>
    );
};
export default Banner;
