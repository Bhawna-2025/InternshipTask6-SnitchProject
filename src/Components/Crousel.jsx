import { Swiper, SwiperSlide } from "swiper/react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const sliderData = [
    {
        image: "/CrouselImage/CrouselImage1.webp",
    },
    {
        image: "/CrouselImage/CrouselImage2.webp",
    },
    {
        image: "/CrouselImage/CrouselImage3.webp",
    },
    {
        image: "/CrouselImage/CrouselImage4.webp",
    },
    {
        image: "/CrouselImage/CrouselImage5.webp",
    },
    {
        image: "/CrouselImage/CrouselImage6.webp",
    },
    {
        image: "/CrouselImage/CrouselImage7.webp",
    },
];

const Crousel = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={3}
             
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={800}
                className="md:h-[80vh] h-[25vh] w-full md:mt-2 md:mb-20 mb-5 overflow-hidden"
            >
                {sliderData.map((item) => (
                    <SwiperSlide className="h-full w-full">
                        <a href="#">
                            <img
                                src={item.image}
                                alt="Image"
                                className="h-full w-full object-cover"
                            />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default Crousel;
