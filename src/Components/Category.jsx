import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const categoryData = [
    {
        category:"Jeans",
        image: "/CategoryImages/Category_cargoImage.webp"
    },
    {
        category:"Jeans",
        image: "/CategoryImages/Category_jeansImage.webp"
    },
    {
        category:"T-shirts",
        image: "/CategoryImages/Category_tshirtImage.webp"
    },
    {
        category:"Trousers",
        image: "/CategoryImages/Category_TrouserImage.webp"
    },
    {
        
        category:"Shirts",
        image: "/CategoryImages/Catogary_ShirtImage.webp"
    },
    {
        category:"T-shirts",
        image: "/CategoryImages/Category_poloImage.webp"
    },

]

const Category = ({setCategory}) => {

    return (
        <>
            <div className='mt-5 md:pl-20'>
                <p className='md:text-4xl text-2xl font-[250]'>SHOP BY</p>
                <p className='md:text-4xl text-2xl font-bold'>CATEGORY</p>
                <div className="h-[3px] w-80 bg-amber-600 mt-3"></div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                slidesPerView={5}

                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={800}
                className='h-full w-full mt-2'
            >
                {categoryData.map((item, index) => (

                    <SwiperSlide key={index} className='h-full w-full' >
                        <a href="#trending" onClick={()=>{
                            // e.preventDefault();
                            setCategory(item.category);
                            // document.getElementById("trending")?.scrollIntoView({ behavior: "smooth" });
                        }}>
                            <img src={item.image} alt="" className='h-full w-full object-contain transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer ' />
                        </a>
                    </SwiperSlide>

                ))}

            </Swiper>

            <a href="#" className='inline-block md:text-sm text-xs md:pl-15 pl-5 underline'>SHOP ALL</a>


        </>
    )
}

export default Category
