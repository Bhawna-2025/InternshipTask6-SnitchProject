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

const priceItems = [
  {
    image: "/priceImages/priceTshirt_Image.webp",
    title: "BUY 3 TOPWEAR",
    price: "₹1999",
  },
  {
    image: "/priceImages/priceShirt_Image.webp",
    title: "BUY 2 SHIRTS",
    price: "₹1799",
  },
  {
    image: "/priceImages/priceTrouser_Image.webp",
    title: "BUY 2 TROUSERS",
    price: "₹2199",
  },
  {
    image: "/priceImages/priceSunglasses_Image.webp",
    title: "BUY 2 SUNGLASSES",
    price: "₹999",
  },
  {
    image: "/priceImages/pricePerfume_Image.webp",
    title: "BUY 2 PERFUMES",
    price: "₹1299",
  },
];

const PriceTags = () => {
  return (
    <div className="bg-[url('/priceBanner.jpeg')] bg-cover bg-center bg-no-repeat md:h-[80vh] h-[30vh] w-full md:my-10 my-5 flex items-end md:pb-12 pb-6 md:px-8 px-4">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        className="w-full overflow-hidden"
      >
        {priceItems.map((item, index) => (
          <SwiperSlide key={index}>
            <a href="#" className="flex md:h-30 h-20 w-full overflow-hidden shadow-md group">
              {/* Left Side: Black Product Box */}
              <div className="bg-black w-[45%] h-full flex items-center justify-center p-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Right Side: Grey Offer Banner with Blurry Glassmorphism Effect */}
              <div className="bg-[#a2a2a2]/50 backdrop-blur-md w-[55%] h-full flex flex-col justify-center px-3 md:px-4 py-2 md:py-3 text-white">
                <p className="md:text-base text-xs font-300 uppercase leading-tight mb-1">
                  {item.title}
                </p>
                <p className="md:text-sm text-xs font-300 tracking-wide flex items-baseline gap-1.5">
                  <span>AT</span>
                  <span className="md:text-2xl text-base font-500 underline underline-offset-4 decoration-2">
                    {item.price}
                  </span>
                </p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PriceTags;
