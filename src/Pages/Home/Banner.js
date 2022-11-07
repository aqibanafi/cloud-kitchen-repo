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

//Import Banner Images
import Breakfast from '../../assets/bannerimg/fried-egg-laying-toast-topped-with-pepper-seeds-with-carrots-spring-onions.jpg'
import Tiffin from '../../assets/bannerimg/podi-idli-is-delicious-breakfast-dish-from-south-india-freshly-steamed-mini-idli-tossed-with-spiced-mix-called-podi-pure-ghee-served-with-chutney-wooden-background-selective-focus.jpg'
import Lunch from '../../assets/bannerimg/chicken-steak-with-lemon-tomato-chili-carrot-white-plate.jpg'
import Dinner from '../../assets/bannerimg/grilled-beef-steak-with-vegetable-flaming-grill.jpg'
import Birthday from '../../assets/bannerimg/PN4NAK0.jpg'
import Office from '../../assets/bannerimg/healthy-lunch-go-packed-lunch-box.jpg'

//Banner Data 
const data = [
    {
        "title": "Premium Breakfast For You",
        "subTitle": "Breakfast Today",
        "image": "https://i.ibb.co/0Js4TMr/fried-egg-laying-toast-topped-with-pepper-seeds-with-carrots-spring-onions.jpg"
    },
    {
        "title": "Healthy School Tiffin Today",
        "subTitle": "Tiffin Today",
        "image": "https://i.ibb.co/TRm5ksm/podi-idli-is-delicious-breakfast-dish-from-south-india-freshly-steamed-mini-idli-tossed-with-spiced.jpg"
    },
    {
        "title": "Premium Lunch For You",
        "subTitle": "Lunch Today",
        "image": "https://i.ibb.co/2S226M4/chicken-steak-with-lemon-tomato-chili-carrot-white-plate.jpg"
    },
    {
        "title": "Quality Office Food Delivery",
        "subTitle": "Quality Food Today",
        "image": "https://i.ibb.co/gWYvYSv/healthy-lunch-go-packed-lunch-box.jpg"
    },
    {
        "title": "Gorgrous Birthday Food",
        "subTitle": "Happy Birthday",
        "image": "https://i.ibb.co/nDrVZQf/PN4NAK0.jpg"
    },
    {
        "title": "Premium Dinner For You",
        "subTitle": "Dinner Today",
        "image": "https://i.ibb.co/Wf1Z7Dk/grilled-beef-steak-with-vegetable-flaming-grill.jpg"
    }
]

export default function App() {
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
