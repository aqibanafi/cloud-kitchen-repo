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
        "title": "Gorgrous Birthday Food",
        "subTitle": "Happy Birthday",
        "image": Birthday
    },
    {
        "title": "Premium Dinner For You",
        "subTitle": "Dinner Today",
        "image": Dinner
    }
]

    < SwiperSlide >
    <div>
        <div className="relative w-full h-full">
            <div className="banner-image">
                <img className="absolute inset-0 object-cover w-full h-full" src={data.image} alt="" />
            </div>
        </div>
    </div>
                        </SwiperSlide >