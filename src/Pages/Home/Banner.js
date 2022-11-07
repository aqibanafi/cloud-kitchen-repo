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
import Image from '../../assets/images/wasa-crispbread-ZMyloE5ySeA-unsplash.jpg'

//Banner Data 
const data = [
    {
        "title": "Premium Breakfast For You",
        "subTitle": "Breakfast Today",
        "image": Image
    },
    {
        "title": "Healthy School Tiffin Today",
        "subTitle": "Tiffin Today",
        "image": Image
    },
    {
        "title": "Premium Lunch For You",
        "subTitle": "Lunch Today",
        "image": Image
    },
    {
        "title": "Quality Office Food Delivery",
        "subTitle": "Quality Food Today",
        "image": Image
    },
    {
        "title": "Gorgrous Birthday Food",
        "subTitle": "Happy Birthday",
        "image": Image
    },
    {
        "title": "Premium Dinner For You",
        "subTitle": "Dinner Today",
        "image": Image
    }
]

export default function Banner() {
    return (
        <>
            <Swiper
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
                                    <p>{info.subTitle}</p>
                                    <h1 className="text-6xl">{info.title}</h1>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </>
    );
}
