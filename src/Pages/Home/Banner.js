import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

//Import CSS
import './Banner.css'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


//Picture Import 
import Breakfast from '../../assets/images/banner/breakfast.jpg';
import Lunch from '../../assets/images/banner/lunch.jpg';
import Dinner from '../../assets/images/banner/dinner.jpg';
import Tiffin from '../../assets/images/banner/school-tiffin.jpg';
import Office from '../../assets/images/banner/office-food.jpg';
import Birthday from '../../assets/images/banner/birthday-cake.jpg';
import { Link } from "react-router-dom";

//Banner Data 
const data = [
    {
        "title": "Premium Breakfast For You",
        "subTitle": "Breakfast Today",
        "image": Breakfast
    },
    {
        "title": "Healthy School Tiffin Today",
        "subTitle": "Tiffin Today",
        "image": Tiffin
    },
    {
        "title": "Premium Lunch For You",
        "subTitle": "Lunch Today",
        "image": Lunch
    },
    {
        "title": "Quality Office Food Delivery",
        "subTitle": "Quality Food Today",
        "image": Office
    },
    {
        "title": "Gorgrous Birthday Cake",
        "subTitle": "Happy Birthday",
        "image": Birthday
    },
    {
        "title": "Premium Dinner For You",
        "subTitle": "Dinner Today",
        "image": Dinner
    }
]

export default function Banner() {
    return (
        <>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#FFA500",
                    "--swiper-navigation-color": "#FFA500",
                }}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <div>
                    {
                        data.map(info => <SwiperSlide>
                            <div className="relative h-[800px]">
                                <div className="banner-image">
                                    <img className="absolute inset-0 object-cover w-full h-full" src={info.image} alt="" />
                                </div>
                                <div className="relative flex flex-col gap-5 text-white text-center font-bold py-80">
                                    <p data-aos="zoom-in-down">{info.subTitle}</p>
                                    <h1 className="text-6xl" data-aos="zoom-in-down">{info.title}</h1>
                                    <div className="mt-5">
                                        <Link to='/services'>
                                            <button className="btn btn-active bg-orange-600 border-0 px-20 hover:bg-orange-900 text-white" data-aos="zoom-in-down">Get Started</button>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </>
    );
}
